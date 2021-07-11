<%@ taglib prefix="spring" uri="http://www.springframework.org/tags" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form" %>
<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Pindorama</title>

    <!-- FavIcon   -->

    <link rel="apple-touch-icon" sizes="180x180" href="./favicon/apple-touch-icon.png">
    <link rel="icon" type="image/png" sizes="32x32" href="./favicon/favicon-32x32.png">
    <link rel="icon" href="./favicon/favicon.ico" type="image/x-icon"/>
    <link rel="shortcut icon" href="./favicon/favicon.ico" type="image/x-icon"/>
    <link rel="manifest" href="./favicon/site.webmanifest">
    <link rel="mask-icon" href="./favicon/safari-pinned-tab.svg" color="#5bbad5">
    <meta name="msapplication-TileColor" content="#da532c">
    <meta name="theme-color" content="#ffffff">

    <!-- Bootstrap -->

    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css"
          integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l" crossorigin="anonymous">
    <!-- Font Awesome -->
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.11.2/css/all.css"/>
    <!-- Style.css -->
    <link rel="stylesheet" href="./css/style.css">
    <link rel="stylesheet" href="./css/materias.css">

    <script type="text/javascript" src="https://www.amcharts.com/lib/3/amcharts.js"></script>
    <script type="text/javascript" src="https://www.amcharts.com/lib/3/serial.js"></script>
    <link rel="stylesheet" type="text/css" href="./css/main.css">
</head>


<body>


<c:if test="${user != null}">
    <c:redirect url="/materias"/>
</c:if>

<div class="w-100 h-100">
    <div id="mydiv"></div>
    <div class="nav-a">
        <img src="Hamburger_icon.svg.png" alt="" class="ham" id="ham">
    </div>

    <div class="menu-lateral show-left" id="menu">
        <div class="d-flex flex-column">

        </div>
    </div>
    <div class="w-100 h-100 menu-exit" id="screen" style="display:none"></div>
    <div class="mydivback">

        <div class="row align-items-center h-100 login" style="margin-right: 0; margin-left:0;">

            <div class="col login-sc pb-5">
                <div class="row align-items-center w-100 h-100 m-0
                            justify-content-center">

                    <div class="col animation-element slide-left" id="login">

                        <div class="d-flex justify-content-center logo-resp"><img src=" ./Images/pindorama_img.png "
                                                                                  alt=" "
                                                                                  style="max-width: 100%;height: auto; object-fit: cover;">
                        </div>

                        <c:url value="/api/v1/login" var="login_url"/>
                        <form:form class="login100-form validate-form mx-auto" method="post" action="${login_url}">




                                <span class="login100-form-title">
                                        Login
                                    </span>

                            <span style="color: red; display: block; text-align: center; font-family: Poppins-Bold; padding-bottom: 10px;">${message}</span>
                            <div class="wrap-input100 validate-input "
                                 data-validate="Valid email is required: ex@abc.xyz ">
                                <input class="input100 input100l " type="email" name="email" placeholder="Email "
                                       required>
                                <span class="focus-input100 "></span>
                                <span class="symbol-input100 ">
                                            <i class="fa fa-envelope"
                                               aria-hidden="true"></i>
                                        </span>
                            </div>

                            <div class="wrap-input100 validate-input " data-validate="Password is required">
                                <input class="input100 input100l " type="password" name="password" placeholder="Senha" maxlength="16"
                                       required>
                                <span class="focus-input100 "></span>
                                <span class="symbol-input100 ">
                                            <i class="fa fa-lock "
                                               aria-hidden="true"></i>
                                        </span>
                            </div>

                            <div class="container-login100-form-btn ">
                                <button class="login100-form-btn ">
                                    Entrar
                                </button>
                            </div>
                            <!---------------------------------------------------------------------------------------------------------------------------------------->
                            <div class="contai m-5 ">
                                <div class="row justify-content-around ">
                                    <div class="col-2 row justify-content-center ">

                                        <a href="" target="_blank "
                                           class="log-buttons "><img src="./Images/Icons/gitblue.png " alt=" "></a>

                                    </div>
                                    <div class="col-2 row justify-content-center ">
                                        <a href="" target="_blank "
                                           class="log-buttons "><img src="./Images/Icons/facebook.png " alt=" "></a>
                                    </div>
                                    <div class="col-2 row justify-content-center ">
                                        <a href="" target="_blank "
                                           class="log-buttons "><img src="./Images/Icons/google.png " alt=" "></a>
                                    </div>
                                </div>

                            </div>
                            <br>


                            <div class="text-center p-t-12 p-2">

                                <a class="txt2 " href="# " id="esq">
                                    Esqueceu sua senha?
                                </a>
                            </div>

                            <div class="text-center p-t-136 p-2">
                                    <span class="txt1 ">
                                        Não possui uma conta ainda?
                                    </span>
                                <a class="txt2 " href="# " id="cad">
                                    Registre-se
                                    <i class="fa fa-long-arrow-right m-l-5 " aria-hidden="true"></i>
                                </a>

                            </div>
                            <div class="text-center p-t-136 p-2">
                                    <span class="txt1 ">
                                        Não quer logar?
                                    </span>
                                <a class="txt2 " href="/materias">
                                    Entre como convidado
                                    <i class="fa fa-long-arrow-right m-l-5 " aria-hidden="true"></i>
                                </a>

                            </div>
                        </form:form>
                        <%session.removeAttribute("message");%>
                    </div>

                    <div class="col animation-element slide-left " id="cadastro" style="display:none; ">

                        <c:url value="/api/v1/register" var="signup_url"/>
                        <form:form class="login100-form validate-form mx-auto " method="post" action="${signup_url}">
                                <span class="login100-back-button " id="voltar">
                                        <i class="fas fa-chevron-left "></i> Voltar
                                    </span>
                            <span class="login100-form-title ">
                                        Crie a sua conta!
                                    </span>

                            <span style="color: red; display: block; text-align: center; font-family: Poppins-Bold;">${signupError}</span>
                            <span style="color: green; display: block; text-align: center; font-family: Poppins-Bold;">${signupSuccess}</span>

                            <div class="wrap-input100 validate-input ">
                                <input class="input100 input100c " type="text" name="nome" placeholder="Nome "
                                       required>
                                <span class="focus-input100 "></span>
                            </div>

                            <div class="wrap-input100 validate-input ">
                                <input class="input100 input100c " type="email" name="email" placeholder="Email "
                                       required>
                                <span class="focus-input100 "></span>
                            </div>

                            <div class="wrap-input100 validate-input ">
                                <input class="input100 input100c " type="password" name="password" placeholder="Senha " maxlength="16"
                                       required>
                                <span class="focus-input100 "></span>
                            </div>

                            <div class="wrap-input100 validate-input ">
                                <select name="genero" class="input100 input100c " style="border: 0;outline: 0; "
                                        required>
                                    <option value=" ">Gênero</option>
                                    <option value="Masculino ">Masculino</option>
                                    <option value="Feminino ">Feminino</option>
                                    <option value="Feminino ">Outro</option>
                                </select>
                                <span class="focus-input100 "></span>
                            </div>

                            <div class="wrap-input100 validate-input ">
                                <input class="input100 input100c " type="text" name="nacionalidade"
                                       placeholder="Nacionalidade " required>
                                <span class="focus-input100 "></span>
                            </div>

                            <div class="wrap-input100 validate-input ">
                                <input class="input100 input100c " type="text" name="nascimento"
                                       placeholder="Data de nascimento " onfocus="(this.type='date' ) "
                                       onblur="(this.type='text' ) " required>
                                <span class="focus-input100 "></span>
                            </div>


                            <div class="container-login100-form-btn ">
                                <button class="login100-form-btn ">
                                    Cadastrar
                                </button>
                            </div>
                            <%session.removeAttribute("signupError");%>
                            <%session.removeAttribute("signupSuccess");%>
                        </form:form>
                    </div>
                    <div class="col animation-element slide-left " id="esqueci" style="display:none; ">
                        <form class="login100-form validate-form mx-auto ">
                                <span class="login100-back-button " id="voltare">
                                        <i class="fas fa-chevron-left "></i> Voltar
                                    </span>
                            <span class="login100-form-title ">
                                        Esqueceu sua senha?
                                    </span>


                            <div class="wrap-input100 validate-input "
                                 data-validate="Valid email is required: ex@abc.xyz ">
                                <input class="input100 input100c " type="email" name="email "
                                       placeholder="Insira o seu email " required>
                                <span class="focus-input100 "></span>
                            </div>


                            <div class="container-login100-form-btn ">
                                <button class="login100-form-btn ">
                                    Enviar
                                </button>
                            </div>

                        </form>
                    </div>
                </div>
            </div>
            <div class="col-md-8 slogan-sc " id="logo">
                <div class="row align-items-center w-100 h-100 m-0 justify-content-center ">

                    <div class="col-6 animation-element slide-bottom ">
                        <img src="./Images/pindorama_img.png " alt="Logo Pindorama " class="img-fluid ">
                        <div class="slogan ">Conhecimento de todo Brasil<br>reunido em um só portal</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

<%session.invalidate();%>
<script src="https://code.jquery.com/jquery-3.5.1.slim.min.js "
        integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj "
        crossorigin="anonymous "></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/js/bootstrap.bundle.min.js "
        integrity="sha384-Piv4xVNRyMGpqkS2by6br4gNJ7DXjqk09RmUpJ8jgGtD7zP9yug3goQfGII0yAns "
        crossorigin="anonymous "></script>
<!-- Custom Script -->
<script src="./js/script.js "></script>
</body>

</html>