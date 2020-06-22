// Barra Superior
const barraSuperior = () => {
    jQuery('.barra-inicial .conteiner .row-fluid div').remove();
    const ul = `
        <ul>
            <li class="active"><a href="#!" target="_BLANK">ShopB</a></li>
            <li><a href="#!"  target="_BLANK">Compra e venda de usados</a></li>
            <li><a href="#!"  target="_BLANK">Games por assinatura</a></li>
            <li><a href="#!"  target="_BLANK">Distribuidora de jogos</a></li>
        </ul>
    `;
    jQuery('.barra-inicial .conteiner .row-fluid').html(ul);
}

// Cabeçalho
const cabecalho = () => {
    const var1 = jQuery('#cabecalho > div.conteiner > div.row-fluid > div.conteudo-topo.span9 > div.superior.row-fluid.hidden-phone > div.span4').html();
    var nome = jQuery('#cabecalho > div.conteiner > div.row-fluid > div.conteudo-topo.span9 > div.superior.row-fluid.hidden-phone > div.span8 > div > a').text().split(', ')[1];
    jQuery('#cabecalho > div.conteiner > div.row-fluid > div.conteudo-topo.span9 > div.superior.row-fluid.hidden-phone').remove();
    // Logo
    jQuery('#cabecalho > div.conteiner > div.row-fluid > div.span3').addClass('span2');
    jQuery('#cabecalho > div.conteiner > div.row-fluid > div.span3').removeClass('span3');
    // Area de Pesquisa
    jQuery('.new-store-shop-b div#cabecalho > .conteiner > .row-fluid .busca-mobile').removeClass('span8');
    jQuery('.new-store-shop-b div#cabecalho > .conteiner > .row-fluid .busca-mobile').addClass('span9');
    // Menu
    jQuery('#cabecalho > div.conteiner > div.row-fluid > div.conteudo-topo.span9').addClass('span10');
    jQuery('#cabecalho > div.conteiner > div.row-fluid > div.conteudo-topo.span9').removeClass('span9');
    jQuery('.new-store-shop-b div#cabecalho > .conteiner > .row-fluid .busca-mobile + div').removeClass('span4');
    jQuery('.new-store-shop-b div#cabecalho > .conteiner > .row-fluid .busca-mobile + div').addClass('span3');
    jQuery('.new-store-shop-b div#cabecalho > .conteiner > .row-fluid .busca-mobile').append(var1);
    if(typeof nome != 'undefined'){
        nome = nome.split(' ')[0];
        jQuery('.new-store-shop-b div#cabecalho > .conteiner > .row-fluid .busca-mobile ul.acoes-conta li:nth-child(2) a').html(`Bem vindo(a),<strong>${nome}</strong>`);
    }else{
        jQuery('.new-store-shop-b div#cabecalho > .conteiner > .row-fluid .busca-mobile ul.acoes-conta li:nth-child(2) a').html('<strong>Login</strong>');
    }

    const var2 = `
        <a class="need-help-header" href="#!">
            Precisa de ajuda? <strong>Fale Conosco</strong>
        </a>
    `;
    jQuery('.new-store-shop-b div#cabecalho > .conteiner > .row-fluid .busca-mobile ul.acoes-conta').before(var2);

    jQuery('.new-store-shop-b div#cabecalho > .conteiner > .row-fluid .busca-mobile .busca form input#auto-complete').attr('placeholder', 'Faça sua pesquisa aqui_')
    jQuery('.vazio-text').html('Meu Carrinho<strong>0 itens</strong>')
}

// Menu Mobile
const menuMobile = () => {
    const imgPerfil = jQuery('.new-store-shop-b div#cabecalho > .conteiner > .row-fluid .busca-mobile ul.acoes-conta li:nth-child(2) a').css('background-image').replace('url(','').replace(')','').replace(/\"/gi, "");
    const linkPerfil = jQuery('.new-store-shop-b div#cabecalho > .conteiner > .row-fluid .busca-mobile ul.acoes-conta li:nth-child(2) a').attr('href');
    const imgLogo = jQuery('#cabecalho > div.conteiner > div.row-fluid > div.span2 > h1 > a > img').attr('src');
    const linkLogo = jQuery('#cabecalho > div.conteiner > div.row-fluid > div.span2 > h1 > a').attr('href');
    const imgCarrinho = jQuery('.new-store-shop-b div#cabecalho > .conteiner > .row-fluid .carrinho a').css('background-image').replace('url(','').replace(')','').replace(/\"/gi, "");
    const linkCarrinho = jQuery('.new-store-shop-b div#cabecalho > .conteiner > .row-fluid .carrinho a').attr('href');
    const formBusca = jQuery('.new-store-shop-b div#cabecalho > .conteiner > .row-fluid .busca-mobile .busca').html();

    const menu = `
        <div id="menu-mobile">
            <div class="conteiner">
                <div class="top">
                    <div class="perfil-mobile">
                        <a href="${linkPerfil}">
                            <img src="${imgPerfil}" alt="Perfil">
                            Perfil
                        </a>
                    </div>
                    <h2 class="logo-mobile">
                        <a href="${linkLogo}">
                            <img src="${imgLogo}" alt="ShopB - 100% Gamer">
                        </a>
                    </h2>
                    <div class="carrinho-mobile">
                        <a href="${linkCarrinho}">
                            <img src="${imgCarrinho}" alt="Carrinho">
                            Carrinho
                        </a>
                    </div>
                </div>
                <div class="bottom">
                    <div class="search-mobile">${formBusca}</div>
                    <button id="toggle-mobile">Menu</button>
                </div>
            </div>
        </div>
    `;
    jQuery('.new-store-shop-b div#cabecalho').before(menu)
}

jQuery(document).ready( () => {
    jQuery('body').addClass('new-store-shop-b');
    barraSuperior();
    cabecalho();
    menuMobile();
});