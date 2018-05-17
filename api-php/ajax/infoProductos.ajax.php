<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
require_once "../controlers/productos.controlador.php";
require_once "../models/productos.modelo.php";
$item = $_GET["item"];
$valor = $_GET["valor"];
class AjaxProductos{
	public function ajax_productos(){
		$respuesta = ControladorProductos::ctrMostrarInfoProducto($item, $valor);
		echo json_encode($respuesta);
	}
}
$objeto = new AjaxProductos();
$objeto -> ajax_productos($item, $valor);