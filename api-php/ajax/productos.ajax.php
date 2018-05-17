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
}if(!empty($_GET["ordenar"])){
	$ordenar = $_GET["ordenar"];
}else{
	$ordenar = null;
}if(!empty($_GET["base"])){
	$base = $_GET["base"];
}else{
	$base = 0;
}if(!empty($_GET["tope"])){
	$tope = $_GET["tope"];
}else{
	$tope = null;
}if(!empty($_GET["modo"])){
	$modo = $_GET["modo"];
}else{
	$modo = 'DESC';
}

class AjaxProductos{
	public function ajax_productos($ordenar, $item, $valor , $base, $tope, $modo){
		$respuesta = ControladorProductos::ctrMostrarProductos($ordenar, $item, $valor , $base, $tope, $modo);
		echo json_encode($respuesta);
	}
}
$objeto = new AjaxProductos();
$objeto -> ajax_productos($ordenar, $item, $valor , $base, $tope, $modo);