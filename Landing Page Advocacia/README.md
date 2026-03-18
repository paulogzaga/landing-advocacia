# Landing Page - Escritório de Advocacia

Landing page profissional para escritórios de advocacia, com design moderno e responsivo.

## 📋 Características

- **Design Responsivo**: Funciona perfeitamente em desktop, tablet e mobile
- **Links Sociais**: Integração com WhatsApp e Instagram
- **Formulário de Contato**: Envia mensagens diretamente para o WhatsApp
- **Animações Suaves**: Efeitos visuais modernos e profissionais
- **SEO Otimizado**: Estrutura HTML semântica
- **Fácil Customização**: Código limpo e bem comentado

## 🚀 Seções Incluídas

1. **Header com Navegação**
   - Logo
   - Menu responsivo
   - Links para WhatsApp e Instagram

2. **Hero Section**
   - Título impactante
   - Botões de call-to-action
   - Imagem ilustrativa

3. **Áreas de Atuação**
   - 6 especialidades jurídicas
   - Cards com ícones

4. **Sobre o Escritório**
   - Texto institucional
   - Diferenciais

5. **Depoimentos**
   - Avaliações de clientes
   - Sistema de estrelas

6. **Contato**
   - Formulário completo
   - Informações de contato
   - Botões para WhatsApp e Instagram

7. **Footer**
   - Links úteis
   - Redes sociais
   - Informações de contato

8. **Botão Flutuante WhatsApp**
   - Fixo no canto inferior direito
   - Animação de pulso

## 🛠️ Como Usar

### 1. Configurar Informações de Contato

Edite os seguintes arquivos para adicionar suas informações:

**index.html** - Substitua os links do WhatsApp e Instagram:
```html
<!-- Procure por: -->
https://wa.me/5511999999999
https://instagram.com/seu_escritorio

<!-- E substitua pelos seus dados -->
```

**script.js** - Atualize o número do WhatsApp:
```javascript
const whatsappNumber = '5511999999999'; // Linha 75
```

### 2. Adicionar Imagens

Adicione as seguintes imagens na pasta `images/`:

- `hero-law.jpg` - Imagem principal (1200x800px recomendado)
- `escritorio.jpg` - Foto do escritório (1200x800px recomendado)

### 3. Personalizar Cores

Edite o arquivo `style.css` nas variáveis CSS (linhas 9-16):

```css
:root {
    --primary-color: #1a4d2e;      /* Verde escuro */
    --secondary-color: #d4af37;    /* Dourado */
    --dark-color: #0f2818;         /* Verde muito escuro */
    /* ... */
}
```

### 4. Atualizar Conteúdo

Edite o `index.html` para personalizar:

- Nome do escritório
- Textos e descrições
- Áreas de atuação
- Depoimentos
- Endereço e contatos

## 📱 Funcionalidades do Formulário

O formulário de contato:
- Valida todos os campos
- Formata automaticamente o telefone
- Envia os dados via WhatsApp
- Previne spam com timer

## 🎨 Customização

### Adicionar Nova Área de Atuação

```html
<div class="area-card">
    <div class="icon">
        <i class="fas fa-icon-name"></i>
    </div>
    <h3>Nome da Área</h3>
    <p>Descrição da área</p>
</div>
```

### Adicionar Novo Depoimento

```html
<div class="depoimento-card">
    <div class="stars">
        <i class="fas fa-star"></i>
        <!-- Repita 5 vezes -->
    </div>
    <p>"Texto do depoimento"</p>
    <div class="cliente">
        <strong>Nome do Cliente</strong>
        <span>Cliente desde 20XX</span>
    </div>
</div>
```

## 📦 Estrutura de Arquivos

```
landing-advocacia/
│
├── index.html          # Estrutura HTML
├── style.css          # Estilos CSS
├── script.js          # Funcionalidades JavaScript
├── README.md          # Documentação
│
└── images/            # Pasta de imagens
    ├── hero-law.jpg
    └── escritorio.jpg
```

## 🌐 Ícones

Os ícones são fornecidos pelo Font Awesome 6.4.0 (CDN):
- https://fontawesome.com/icons

## 📱 Links Sociais Configurados

- **WhatsApp**: Clique direto para conversa
- **Instagram**: Link para perfil
- **Facebook**: (opcional, já incluído no footer)
- **LinkedIn**: (opcional, já incluído no footer)

## ⚡ Performance

- CSS e JS minificados para produção
- Imagens otimizadas recomendadas
- Carregamento rápido
- Animações suaves

## 🔧 Requisitos

- Navegador moderno (Chrome, Firefox, Safari, Edge)
- Nenhuma dependência externa (exceto Font Awesome CDN)

## 📝 Checklist de Configuração

- [ ] Substituir número do WhatsApp (HTML + JS)
- [ ] Atualizar link do Instagram
- [ ] Adicionar logo do escritório
- [ ] Adicionar imagens (hero e escritório)
- [ ] Personalizar textos e descrições
- [ ] Atualizar endereço e contatos
- [ ] Ajustar cores (se necessário)
- [ ] Testar em dispositivos móveis
- [ ] Testar formulário de contato
- [ ] Verificar todos os links

## 🚀 Deploy

Para colocar online, você pode usar:

- **GitHub Pages** (gratuito)
- **Netlify** (gratuito)
- **Vercel** (gratuito)
- **Hospedagem tradicional** (qualquer servidor web)

## 📄 Licença

Este projeto pode ser usado livremente para projetos pessoais e comerciais.

## 💡 Dicas

1. Use imagens profissionais de alta qualidade
2. Mantenha os textos claros e objetivos
3. Teste em diferentes dispositivos
4. Otimize as imagens antes de fazer upload
5. Mantenha o conteúdo sempre atualizado

## 🆘 Suporte

Para personalizações avançadas ou dúvidas, revise os comentários no código.

---

**Desenvolvido com ❤️ para escritórios de advocacia**
