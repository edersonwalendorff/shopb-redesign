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

    // Fale Conosco
    const var2 = `
        <a class="need-help-header" href="#!">
            Precisa de ajuda? <strong>Fale Conosco</strong>
        </a>
    `;
    jQuery('.new-store-shop-b div#cabecalho > .conteiner > .row-fluid .busca-mobile ul.acoes-conta').before(var2);

    // Carrinho
    jQuery('.new-store-shop-b div#cabecalho > .conteiner > .row-fluid .busca-mobile .busca form input#auto-complete').attr('placeholder', 'Faça sua pesquisa aqui_')
    var qtdCarrinho = jQuery('.new-store-shop-b div#cabecalho>.conteiner>.row-fluid .carrinho>a .qtd-carrinho').text();
    if(qtdCarrinho != '0'){
        jQuery('.new-store-shop-b div#cabecalho>.conteiner>.row-fluid .carrinho>a .qtd-carrinho + span').remove();
        jQuery('.vazio-text').remove();
        if(qtdCarrinho == 1){ var itens = 'item'; }else{ var itens = 'itens'; }
        jQuery('.new-store-shop-b div#cabecalho>.conteiner>.row-fluid .carrinho>a').html(`Meu Carrinho<strong>${qtdCarrinho} ${itens}</strong>`)
    }else{
        jQuery('.vazio-text').html('Meu Carrinho<strong>0 itens</strong>');
    }

    // Ver Mais no menu
    jQuery('.new-store-shop-b div#cabecalho .menu.superior ul.nivel-um>li.com-filho > a').each( function() {
        let link = jQuery(this).attr('href');
        jQuery(this).next().append(`<li class="see-all"><a href="${link}">Ver Todos</a></li>`);
    });

    // Primeiro item ativo no menu
    jQuery('.new-store-shop-b div#cabecalho .menu.superior ul.nivel-um>li.com-filho > ul.nivel-dois > li:first-child').addClass('active');
    jQuery('.new-store-shop-b div#cabecalho .menu.superior ul.nivel-um>li ul.nivel-dois>li:not(.see-all)').hover( function(){
        jQuery('.new-store-shop-b div#cabecalho .menu.superior ul.nivel-um>li ul.nivel-dois>li').removeClass('active');
        jQuery(this).addClass('active');
    });
    
    // CTA MGU Menu
    const mgu = '<div class="cta-mgu"><a href="https://www.meugameusado.com.br" target="_BLANK">Quer vender ou comprar <strong>jogos usados de PS4?</strong> <span>Clique aqui</span></a></div>';
    jQuery('.new-store-shop-b div#cabecalho .menu.superior ul.nivel-um>li > ul.nivel-dois').append(mgu);
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
    const menuMobile = jQuery('.new-store-shop-b div#cabecalho .menu.superior').html();

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
                    <button id="toggle-mobile"><span>Menu</span><span class="d-none">Fechar</span></button>
                </div>
            </div>
        </div>
        <div id="overlay-menu">
            ${menuMobile}
        </div>
    `;
    jQuery('.new-store-shop-b div#cabecalho').before(menu);

    // Toggle Menu Mobile
    jQuery('.new-store-shop-b #menu-mobile .bottom #toggle-mobile').click( () => {
        jQuery('#overlay-menu').toggleClass('show');
        jQuery('.new-store-shop-b #menu-mobile .bottom #toggle-mobile span').toggleClass('d-none');
        jQuery('body').toggleClass('no-scroll')
    });

    // Voltar menu mobile
    jQuery('.new-store-shop-b #overlay-menu ul.nivel-um>li ul').prepend('<li class="go-back">Voltar</li>')
    // Remover href desnecessários
    jQuery('.new-store-shop-b #overlay-menu ul.nivel-um>li.com-filho >a').removeAttr('href');
    // Toggle sub-menu mobile
    jQuery('.new-store-shop-b #overlay-menu ul.nivel-um>li>a').click( function() {
        jQuery(this).next().addClass('show');
    });
    jQuery('.new-store-shop-b #overlay-menu ul.nivel-um>li ul li.go-back').click( function() {
        jQuery(this).parent('ul.nivel-dois').removeClass('show');
    });
}
// Banner
const banner = () => {
    // Tratamento da informações do banner
    jQuery('.secao-banners .banner .flexslider .slides img').each( function() {
        let infoBanner = jQuery(this).next().html().split('||');
        let formatInfo = `
            <strong>${infoBanner[0]}</strong>
            <strong>${infoBanner[1]}</strong>
            <strong>${infoBanner[2]}</strong>
        `;
        jQuery(this).next().html(formatInfo);
    });
}
// Mini Banenrs Home
const miniBanners = () => {
    jQuery('.mini-banner').removeClass('hidden-phone');
    jQuery('.mini-banner > div > div > ul.slides > li > a > img').each(function(){
        let title = jQuery(this).attr('alt').split('||');
        let name = `
            <div class="title-mini-banner">
                <small>${title[0]}</small>
                <h3>${title[1]}</h3>
            </div>
        `;
        jQuery(this).after(name);
    });
}
// Tarja
const tarja = () => {
    const tarja = jQuery('div.secao-banners > div > div.row-fluid.banner.hidden-phone > div').html();
    if(typeof tarja != 'undefined'){
        const tarjaImg = jQuery('div.secao-banners > div > div.row-fluid.banner.hidden-phone > div > img');
        let mobile;
        let desktop;
        jQuery(tarjaImg).each( function(index){
            if(this.alt == 'Tarja Mobile'){
                mobile = index; 
            }else{
                desktop = index; 
            }
        });

        const tarjaArea = `
        <div class="tarja-area">
            <div class="span12">
                <img class="tarja-desktop" src="${tarjaImg[desktop].currentSrc}" alt="Tarja Desktop">
                <img class="tarja-mobile" src="${tarjaImg[mobile].currentSrc}" alt="Tarja Mobile">
            </div>
        </div>
        `;
        jQuery('div.secao-banners > div > div.row-fluid.banner.hidden-phone > div').remove();
        jQuery('.new-store-shop-b .banner.mini-banner').after(tarjaArea);
    }
}

// Card Product
const cardProduct = () => {
    // jQuery('.new-store-shop-b #listagemProdutos ul.produtos-carrossel .listagem-linha .flex-viewport ul li .listagem-item .acoes-produto .botao-comprar.principal').html('Adicionar ao carrinho');    
}

jQuery(document).ready( () => {
    jQuery('body').addClass('new-store-shop-b');
    barraSuperior();
    cabecalho();
    menuMobile();
    banner();
    miniBanners();
    tarja();
    cardProduct();
});