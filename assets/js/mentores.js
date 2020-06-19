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
    jQuery('.new-store-shop-b div#cabecalho > .conteiner > .row-fluid .busca-mobile').removeClass('span8');
    jQuery('.new-store-shop-b div#cabecalho > .conteiner > .row-fluid .busca-mobile').addClass('span9');
    jQuery('.new-store-shop-b div#cabecalho > .conteiner > .row-fluid .busca-mobile + div').removeClass('span4');
    jQuery('.new-store-shop-b div#cabecalho > .conteiner > .row-fluid .busca-mobile + div').addClass('span3');
    jQuery('.new-store-shop-b div#cabecalho > .conteiner > .row-fluid .busca-mobile').append(var1);
    if(typeof nome != 'undefined'){
        nome = nome.split(' ')[0];
        jQuery('.new-store-shop-b div#cabecalho > .conteiner > .row-fluid .busca-mobile ul.acoes-conta li:nth-child(2) a').html(`Bem vindo(a),<strong>${nome}</strong>`);
    }else{
        jQuery('.new-store-shop-b div#cabecalho > .conteiner > .row-fluid .busca-mobile ul.acoes-conta li:nth-child(2) a').html('<strong>Login</strong>');
    }

    jQuery('.vazio-text').html('Meu Carrinho<strong>0 itens</strong>')
}

jQuery(document).ready( () => {
    jQuery('body').addClass('new-store-shop-b');
    barraSuperior();
    cabecalho();
});