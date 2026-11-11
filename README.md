# Acervo — acesso pelo link completo

Este repositório contém o programa de abertura e um catálogo criptografado.
A chave de abertura não está no repositório nem no código publicado.

O responsável compartilha um endereço que inclui a chave no fragmento da URL.
Sem essa parte, a página não descriptografa o catálogo. Quem receber o link
completo poderá abri-lo, encaminhá-lo e guardar os arquivos a que teve acesso.

Criptografia: AES-256-GCM com chave aleatória de 256 bits, IV aleatório de
96 bits e autenticação de 128 bits, usando as implementações nativas do Node.js
na preparação e Web Crypto no navegador. Não há senha para digitar.

Não acrescente chaves, links completos de abertura, PDFs, GLBs ou versões
descriptografadas a este repositório. Os arquivos de licença são públicos.

GitHub Pages: publicar `main`, pasta `/(root)`, com HTTPS.
O mecanismo de abertura foi testado localmente com Web Crypto. A interface
e o desempenho em aparelhos físicos ainda precisam ser confirmados após a
publicação. Isso não é controle de acesso por pessoa nem impede encaminhamentos.
