# Stepay — Onboarding de Empréstimo

Onboarding completo para solicitação de crédito empresarial, com múltiplas etapas, regras condicionais e fluxo real de uma fintech.

---

## Sobre o Projeto

O **Stepay Onboarding** é um fluxo de solicitação de empréstimo empresarial com múltiplas etapas, caminhos condicionais e lógica de negócio complexa. O objetivo da refatoração foi reconstruir a aplicação do zero com padrões de mercado modernos, mantendo a fidelidade ao produto original.

O projeto cobre:

- Coleta de dados pessoais e empresariais
- Simulação de crédito com slider interativo
- Validação de CPF com lógica condicional (sócio único, vários sócios, fora do quadro)
- Motor de crédito mockado com 4 cenários (aprovado, análise manual, negado, 90 dias)
- Gestão de documentos por upload
- Confirmação de proposta com dados bancários
- Fluxos de desistência com coleta de motivo
- Sistema white-label com tema dinâmico por cliente

---

## Decisões Técnicas

### Arquitetura Feature-Based

O projeto é organizado por domínio de negócio, não por tipo de arquivo. Cada etapa do fluxo é um módulo isolado com suas próprias páginas, schemas, hooks e componentes.

```
src/
├── app/              # Router, providers, configuração global
├── features/
│   └── onboarding/
│       ├── primeira-etapa/
│       ├── segunda-etapa/
│       ├── terceira-etapa/
│       └── quarta-etapa/
├── shared/           # Componentes, hooks e utilitários globais
├── store/            # Zustand stores
└── theme/            # Sistema white-label
```

Essa estrutura facilita leitura, manutenção e remoção de módulos inteiros sem impacto no restante da aplicação.

### Validação e Formulários

Todos os formulários utilizam **React Hook Form + Zod**. Cada página de formulário tem seu próprio schema tipado — o tipo do formulário é inferido diretamente do schema, eliminando duplicação entre tipo e validação.

```typescript
// O tipo é derivado do schema — zero duplicação
export const dadosPessoaisSchema = z.object({ ... });
export type DadosPessoaisForm = z.infer<typeof dadosPessoaisSchema>;
```

### Estado Global com Criptografia

O estado do onboarding é persistido em `localStorage` com criptografia AES via `crypto-js`. Em caso de refresh ou navegação, o usuário retorna exatamente onde parou.

```
Zustand state → JSON.stringify → AES encrypt → localStorage
localStorage → AES decrypt → JSON.parse → Zustand state
```

### Model Aninhado por Etapa

O `DadosModel` é estruturado com objetos aninhados por etapa. Isso mantém o `setModel` nas páginas limpo e previsível:

```typescript
// Em qualquer página de formulário — sempre o mesmo padrão
setModel({ ...(model ?? {}), detalhesPedido: values });
```

### Componentes Compartilhados Estratégicos

Padrões repetidos foram extraídos em componentes base ao invés de copiar código entre páginas:

| Componente | Reutilizado em |
|---|---|
| `IdentificacaoBase` | Identificacao + IdentificacaoMaisSocios |
| `ProximosPassosBase` | ForaQuadro + Socios + Socio |
| `DesistenciaBase` | 3 telas de desistência (3ª e 4ª etapas) |
| `PropostaResumoCard` | Confirmacao + ConclusaoSolicitacao + VisualizacaoSolicitacao |
| `SimulacaoCard` | Todas as telas de próximos passos |

### Hooks de Domínio

Lógica de negócio fica em hooks, não nas páginas:

- `useHydrateForm` — hidrata qualquer form a partir do store com uma linha
- `useMockCpfValidation` — lógica condicional de validação de CPF (sócio único / vários / fora do quadro)
- `useMockMotorCredito` — decisão do motor de crédito (aprovado / análise manual / negado / 90 dias)
- `useShareLink` — geração de link de compartilhamento para sócios
- `useMockProposta` — dados financeiros derivados do store para a quarta etapa

### White-Label Dinâmico

O tema é resolvido automaticamente na seguinte ordem de prioridade:

```
querystring (?client=X) → localStorage → variável de ambiente → hostname → default
```

Permite múltiplos clientes (tenants) sem rebuild — basta apontar para o hostname correto.

---

## Stack

| Categoria | Tecnologia |
|---|---|
| Framework | React 18 + TypeScript (strict) |
| Build | Vite |
| Estado global | Zustand + persist middleware |
| Persistência | AES encrypt + localStorage |
| Formulários | React Hook Form + Zod |
| UI | Material UI v7 |
| Roteamento | React Router v6 (lazy loading + Suspense) |
| Máscaras | React Number Format |
| HTTP | Axios (preparado para integração) |
| Estilo | styled-components + sx prop (MUI) |

---

## Fluxo da Aplicação

```
INÍCIO
  └── Dados Pessoais
        └── Detalhes do Pedido
              └── Simulação
                    └── Solicitar CPF
                          └── Consulta Motor
                                ├── Aprovado ──────────── Confirmação ──── Segunda Etapa
                                ├── Análise Manual ─────── Análise Manual
                                ├── Negado ─────────────── Pedido Negado
                                └── 90 Dias ────────────── Modal (finalizar)

SEGUNDA ETAPA
  └── Identificação do sócio
        ├── Fora do quadro ──── Identificacao ──── ConclusaoNaoSocio
        ├── Sócio único ──────── ProximosPassosSocio ──── Terceira Etapa
        └── Vários sócios ────── IdentificacaoMaisSocios ── ProximosPassosSocios ── Terceira Etapa

TERCEIRA ETAPA
  └── Documentos
        └── Criar Senha
              └── Solicitação Concluída

QUARTA ETAPA
  └── Confirmação da Proposta
        ├── Aceitar ─── Conclusão da Solicitação
        └── Negar ───── Desistência Proposta
```

Cada etapa possui também caminhos de desistência e páginas de estado (pedido cancelado, expirado).

---

## Mocks e Preparação para API

O projeto está estruturado para integração com backend real sem refatoração de páginas. A lógica mockada fica isolada em hooks e constantes com comentários `// TODO`:

Para testar os cenários localmente:

| Último dígito do CNPJ | Cenário |
|---|---|
| 1, 2 ou 3 | ✅ Aprovado |
| 4, 5 ou 6 | 🔍 Análise manual |
| 7, 8 ou 9 | ❌ Negado |
| 0 | ⏳ Proposta nos últimos 90 dias |

| Soma dos dígitos do CPF | Cenário |
|---|---|
| Par | Sócio único |
| Ímpar | Fora do quadro societário |
| Último dígito 0 | Vários sócios |

---

## Rodando o Projeto

```bash
# instalar dependências
npm install

# rodar em desenvolvimento
npm run dev

# build de produção
npm run build
```

Para testar com um cliente específico (white-label):

```bash
# via subdomínio
http://clientB.localhost:5173

# via querystring
http://localhost:5173/?client=clientA

# via localStorage (console do browser)
localStorage.setItem("app-theme", "clientC")
location.reload()

# via variável de ambiente
VITE_CLIENT=clientC npm run dev
```

---

## O que este projeto demonstra

- Fluxo completo de onboarding real
- Arquitetura escalável baseada em domínio
- Domínio de tipagem de formulários 
- Gerenciamento de estado global com persistência criptografada
- Separação clara entre regras de negócio (hooks), estado (store) e apresentação UI
- Sistema multi-tenant com tema dinâmico
- Preparado para integração com API (backend)

---

### Próximos Passos

O projeto continuará evoluindo com foco em robustez e integração com serviços reais:

- Implementação de testes automatizados (unitários e de integração) com foco nas regras de negócio e fluxos críticos
- Integração com backend real para substituição dos mocks de crédito, validação e proposta
- Tratamento avançado de estados assíncronos (loading, erro, retry)
- Observabilidade e logging para análise de comportamento do usuário
- Melhorias de acessibilidade (a11y) e experiência do usuário
