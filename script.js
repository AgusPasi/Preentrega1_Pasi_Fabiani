/* Opciones proyecto final 
 Juego de rol/elige tu propia aventura lineal
 Pequeño ecommerce => login, agregar producto al carrito, eliminar del carrito, aumentar cantidad, disminuir cantidad, pagar, salir, ver catalogo, etc
*/
function nombrarBrujo() {
    let name = prompt("Decides revisar tu morral en busca de algo que te ayude a recordar tu nombre, dentro encuentras una carta con el sello del rey, roto.\n\nDecides leer la carta, en ella ves tu nombre a simple vista...\n\nTe llamas")
    let flag = false
    if (name === null || name === "") {
        for (let i = 0; i < 3; i++) {
            name = prompt("Esta escrito en el papel...\n¿Cual es tu nombre?")
            if (name !== null && name !== "") {
                flag = true
                break
            }
        }
    } else {
        return name
    }
    if (flag) {
        return name
    } else {
        name = "Desconocido"
        alert("Al parecer sigues muy aturdido como para leer tu nombre...\nTe llamaras " + name + " durante toda la aventura.")
        return name
    }

}

function camino() {
    let choice
    do {
        choice = Number(prompt('Decidido a cumplir con ese contrato recoges tu espada y sacas tu mapa para orientarte.\nPuedes optar por 2 caminos:\nEl camino real el cual te llevara 2 dias llegar a Wyzima o bien puedes tomar un atajo a traves de un peligroso pantano el cual en pocas horas te llevara a la ciudad.\n\n¿Que decides?\n\n1.Camino real\n2.Pantano'))
        if (choice === 1) {
            alert("Transitas el camino real para dirigirte hacia la ciudad.\nUnos metros mas adelante observas una carreta rota, al acercarte sientes como si el viento se cortara... ¡Una flecha!\nSe trata de 2 bandidos que intentan asaltarte...\nNo tienes otra alternativa que pelear")
        }
        if (choice === 2) {
            alert("Escoges el camino del pantano y comienzas tu marcha, efectivamente al cabo de unas horas llegas a la ciudad, para tu sorpresa no te has topado ningun peligro")
        }
    } while (choice !== 1 && choice !== 2);
    return choice
}

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min
}

function huir(value) {
    switch (value) {
        case 1:
            alert("Logras huir exitosamente pero el bandido te roba todo tu oro")
            return 0
            break
        case 2:
            alert("Logras huir del grifo pero al llegar a Wyzima la escolta real de Radovid te captura.\nTe llevan ante el rey el cual decreta que al huir del grifo has cometido un acto de traición y seras ejecutado.")
            alert("Fin de la aventura")
            return 0
            break
        default:
            break
    }
}

function pelear(hpBrujo, hpEnemigo, nombreEnemigo, dañoMax) {
    let dañoBrujo
    let dañoEnemigo
    let huir
    do {
        huir = prompt("Tu vida es de " + hpBrujo + "\nEl enemigo tiene " + hpEnemigo + " puntos de vida." + "\n¿Quieres huir o seguir peleando?\n1.Huir\n2.Seguir peleando")

        if (huir === null || huir === "") {
            continue
        } else if (huir === "1") {
            break
        } else if (huir !== "2") {
            continue
        } else if (huir === NaN) {
            continue
        }
        dañoBrujo = getRandomNumber(1, 10)
        dañoEnemigo = getRandomNumber(1, dañoMax)
        hpBrujo -= dañoEnemigo
        hpEnemigo -= dañoBrujo
        if (hpBrujo < 0) {
            hpBrujo = 0
        }
        if (hpEnemigo < 0) {
            hpEnemigo = 0
        }
        alert(nombreEnemigo + " te ha pegado por " + dañoEnemigo + " te restan " + hpBrujo + " puntos de vida\n\nLe has pegado a " + nombreEnemigo + " " + dañoBrujo + " le restan " + hpEnemigo)
    } while (hpBrujo > 0 && hpEnemigo > 0 && huir !== 1);

    if (hpBrujo <= 0) {
        alert("Has muerto, fin de la aventura")
    } else if (hpEnemigo <= 0) {
        alert("Has matado a " + nombreEnemigo)
    }

    return {
        salud: hpBrujo,
        huida: huir
    }
}

function comprobarVitalidad(hp) {
    let flag = false
    if (hp === 0) {
        return flag = true
    } else { return flag }
}

function pasarNoche(oro) {
    let decision
    do {
        decision = Number(prompt("1.Ir a ver al rey\n2.Dormir en la posada\n3.Dormir en la calle"))

        if (decision === 1) {
            alert("Al llegar a la puerta del castillo pides una audiencia con el rey, pero los guardias te prohiben el ingreso hasta el otro dia... El rey no recibe a nadie a la hora de dormir.\nVuelve mañana.")
            decision = 0
        } else if (decision === 2) {
            caso = posada(oro)
            if (caso === 1) {
                return 1
            } else if (caso === 2) {
                return 2
            } else if (caso === 0) {
                decision = 0
            }
        } else if (decision === 3) {
            alert("Decides dormir en la calle, buscas un establo que te resguarde de la lluvia que comienza a caer.\nAl cabo de un rato encuentras uno, te recuestas sobre un monton de paja y te duermes.")
            return 3
        }
    } while (decision !== 1 && decision !== 2 && decision !== 3);

}

function posada(oro) {
    let choice
    alert("Entras a una posada llamada El jarro ajado, alli hablas con el posadero para alquilar una habitacion.\nTe costará 30 coronas tienes " + oro)
    if (oro < 30) {
        alert("No tienes el oro suficiente, el posadero te invita cordialmente a retirarte")
        choice = 0
    } else {
        do {
            choice = Number(prompt("Antes de dormir decides tomar una cerveza mientras escuchas cantar al bardo.\n\nAl cabo de unos minutos un borracho se acerca en una pose agresiva, te dice que no le gusta tu cara y la va a 'arreglar a golpes'\nTienes 2 opciones, pelear o usar la señal de Axii para calmar al borracho.\n1.Pelear contra el borracho\n2.Utilizar señal de Axii"))
        } while (choice !== 1 && choice !== 2);
        if (choice === 1) {
            alert("Hábilmente agarras al borracho de la nuca y estampas su cabeza contra la mesa, noqueandolo al instante.\nTe levantas y vas hacia tu habitación, los demas clientes se hacen a un lado por el miedo que les generas.")
        }
        else if (choice === 2) {
            alert("Utilizas la señal de Axii y el borracho balbuceando cosas sin sentido se aleja de ti.\nEl posadero habiendo observado toda la situación, se acerca y te agradece el no haber armado una riña, te entrega algo que puede serte útil..\n¡Un frasco de curación!")
        }
        return choice
    }

}
function curarse(hpBrujo, curaciones) {
    let choice
    do {
        choice = Number(prompt("¿Quieres curarte?\nTienes " + curaciones + " curaciones" + "\n1.Si\n2.No"))
        if (choice === 1) {
            hpBrujo += 5
            curaciones--
            alert("Te has curado por 5 puntos\nAhora tienes " + hpBrujo + " puntos de vida.")
        }
        
    } while (choice !== 1 && choice !== 2);
    return {
        salud: hpBrujo,
        potas: curaciones,
        curar: choice
    }
  

}

function main() {
    let hpBrujo = 10
    let obj
    let objCura
    let decision
    let oro = 50
    let curaciones = 1
    alert("Te encuentras tumbado en el suelo de un bosque oscuro y misterioso.\n\nTodavia aturdido, te despiertas, a tu lado se encuentra una extraña criatura atravesada por una espada.\n\nTe sientas sobre el pasto para comprobar tus heridas, todo parece estar bien, salvo por una cosa...\n\nNo recuerdas tu nombre")
    let name = nombrarBrujo()
    alert('"Se convoca al brujo ' + name + ' para dar caza al grifo que aterra los bosques de Wyzima\nSe ofrece una recompensa de 10000 coronas\nFirma rey Radovid IV"')
    decision = camino()
    if (decision === 1) {
        obj = pelear(hpBrujo, 6, "Primer bandido ", 3)
        if (comprobarVitalidad(obj.salud)) {
            return 0
        }
        hpBrujo = obj.salud
        if (obj.huida === "1") {
            oro = huir(1)
        } else {
            if (curaciones > 0) {
                objCura = curarse(hpBrujo, curaciones)
                hpBrujo = objCura.salud
                curaciones = objCura.potas
            }
            alert("Todavia queda el segundo bandido")
            obj = pelear(hpBrujo, 6, "Segundo bandido ", 3)
            if (comprobarVitalidad(obj.salud)) {
                return 0
            }
            hpBrujo = obj.salud
            if (obj.huida === "1") {
                oro = huir(1)
            } else {
                if (curaciones > 0) {
                    objCura = curarse(hpBrujo, curaciones)
                    hpBrujo = objCura.salud
                    curaciones = objCura.potas
                }
                alert("Habilmente neutralizas al segundo bandido.\nContinuas tu camino hacia la ciudad de Wyzima")
            }
        }

    }
    alert("Al caer la noche entras a la ciudad de Wyzima, es una ciudad grande y poblada, hay espectalos callejeros y vendedores ambulantes, tambien una gran cantidad de guardias.\n\nTienes 3 opciones, ir a ver al rey Radovid, dormir en la calle, o bien pasar la noche en una posada.")
    decision = pasarNoche(oro)
    if (decision === 1) {
        oro -= 30
    } else if (decision === 2) {
        oro -= 30
        curaciones += 1
    }
    alert("Te despiertas y a primera hora vas a ver al rey Radovid.\nLos guardias te reconocen al instante y te dejan pasar.")
    alert("Una vez dentro del salon del trono haces una reverencia ante el rey.\nRadovid te comenta que el grifo esta anidando en los campos del este de Wyzima y que mientras esa criatura viva los granjeros no pueden recolectar la cosecha la cual es muy importante para el invierno que se avecina.")
    alert("Decidido tomas tu equipo y sales en busca de la bestia.")
    for (let i = 0; i < curaciones; i++) {
        objCura = curarse(hpBrujo, curaciones)
        if(objCura.curar === 2){
            break
        }
        hpBrujo = objCura.salud
        curaciones = objCura.potas
    }
    
    alert("Llegas a los campos que se encuentran al este de Wyzima, escuchas gritos desgarradores que provienen de un molino cercano.\nA toda prisa te acercas alli\nCuando llegas ves al grifo comiendose vivo a un pobre granjero\nDesenvainas tu espada de plata y te preparas para luchar.")
    obj = pelear(hpBrujo, 15, "Grifo", 6)
    if (comprobarVitalidad(obj.salud)) {
        return 0
    }
    hpBrujo = obj.salud
    if (obj.huida === "1") {
        huir(2)
        return 0
    } else {
        alert("Has derrotado al temible grifo, el rey cumple su parte del trato y te entrega una pesada bolsa con el oro.\n" + "Tu oro actual es de " + (oro += 10000) + " coronas")
        alert("¡Fin de la aventura, felicitaciones brujo " + name + " has ganado!")
    }
}


main()


