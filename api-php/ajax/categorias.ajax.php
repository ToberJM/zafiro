<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
require_once "../controlers/productos.controlador.php";
require_once "../models/productos.modelo.php";
if(!empty($_GET["item"])){
	$item = $_GET["item"];
}else{
	$item = null;
}if(!empty($_GET["valor"])){
	$valor = $_GET["valor"];
}else{
	$valor = null;
}
class AjaxProductos{
	
	public static function ajaxCategorias($item,$valor){
		$respuesta = ControladorProductos::ctrMostrarCategorias($item,$valor);
		echo json_encode($respuesta);
	}
}
$objeto = new AjaxProductos();
$objeto -> ajaxCategorias($item,$valor);