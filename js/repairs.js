let repTitleOne = document.querySelector('.rep_title.one')
let repTitleTwo = document.querySelector('.rep_title.two')
let repTitleThree = document.querySelector('.rep_title.three')
let repairOne = document.querySelector('.repair.one')
let repairTwo = document.querySelector('.repair.two')
let repairThree = document.querySelector('.repair.three')
let compTitleVal = document.getElementById('comp_1')
let compTitleValTwo = document.getElementById('comp_2')
let compTitleValThree = document.getElementById('comp_3')
let houseOne = document.querySelector('.house.one')
let houseTwo = document.querySelector('.house.two')
let houseThree = document.querySelector('.house.three')
let houseFour = document.querySelector('.house.four')
let repTitleOneB = document.querySelector('.rep_title.one b')
let repTitleTwoB = document.querySelector('.rep_title.two b')
let repTitleThreeB = document.querySelector('.rep_title.three b')
let inp = document.getElementById("ageInputId");
let out = document.getElementById("ageOutputId");



function update() {
    out.textContent = inp.value;
    out.style.left = (inp.value - inp.min) / (inp.max - inp.min) * 100 + "%";



    if(repTitleOne.classList.contains('active')){ 
    compTitleVal.textContent = inp.value * 6900
    compTitleValTwo.textContent = inp.value * 3450
    compTitleValThree.textContent = inp.value * 6900 + inp.value * 3450

        if(houseTwo.classList.contains('active')){ 
            compTitleVal.textContent = inp.value * 5900
            compTitleValTwo.textContent = inp.value * 2950
            compTitleValThree.textContent = inp.value * 5900 + inp.value * 2950
        }

        if(houseThree.classList.contains('active')){ 
            compTitleVal.textContent = inp.value * 7900
            compTitleValTwo.textContent = inp.value * 3950
            compTitleValThree.textContent = inp.value * 7900 + inp.value * 3950
        }

        if(houseFour.classList.contains('active')){ 
            compTitleVal.textContent = inp.value * 8900
            compTitleValTwo.textContent = inp.value * 4450
            compTitleValThree.textContent = inp.value * 8900 + inp.value * 4450
        }
    }



    if(repTitleTwo.classList.contains('active')){ 
    compTitleVal.textContent = inp.value * 7700
    compTitleValTwo.textContent = inp.value * 3850
    compTitleValThree.textContent = inp.value * 7700 + inp.value * 3850

        if(houseTwo.classList.contains('active')){ 
            compTitleVal.textContent = inp.value * 6700
            compTitleValTwo.textContent = inp.value * 3350
            compTitleValThree.textContent = inp.value * 6700 + inp.value * 3350
        }

        if(houseThree.classList.contains('active')){ 
            compTitleVal.textContent = inp.value * 8700
            compTitleValTwo.textContent = inp.value * 4350
            compTitleValThree.textContent = inp.value * 8700 + inp.value * 4350
        }

        if(houseFour.classList.contains('active')){ 
            compTitleVal.textContent = inp.value * 9700
            compTitleValTwo.textContent = inp.value * 4850
            compTitleValThree.textContent = inp.value * 9700 + inp.value * 4850
        }
    }



    if(repTitleThree.classList.contains('active')){ 
    compTitleVal.textContent = inp.value * 8600
    compTitleValTwo.textContent = inp.value * 4300
    compTitleValThree.textContent = inp.value * 8600 + inp.value * 4300

        if(houseTwo.classList.contains('active')){ 
            compTitleVal.textContent = inp.value * 7600
            compTitleValTwo.textContent = inp.value * 3800
            compTitleValThree.textContent = inp.value * 7600 + inp.value * 3800
        }

        if(houseThree.classList.contains('active')){ 
            compTitleVal.textContent = inp.value * 9600
            compTitleValTwo.textContent = inp.value * 4800
            compTitleValThree.textContent = inp.value * 9600 + inp.value * 4800
        }

        if(houseFour.classList.contains('active')){ 
            compTitleVal.textContent = inp.value * 10600
            compTitleValTwo.textContent = inp.value * 5300
            compTitleValThree.textContent = inp.value * 10600 + inp.value * 5300
        }
    }
  }




  houseOne.addEventListener('click', () => { 
    houseOne.classList.add('active')
    houseTwo.classList.remove('active')
    houseThree.classList.remove('active')
    houseFour.classList.remove('active')
    repTitleOneB.textContent = 6900
    repTitleTwoB.textContent = 7700
    repTitleThreeB.textContent = 8600

    if(repTitleOne.classList.contains('active')){ 
        compTitleVal.textContent = inp.value * 6900
        compTitleValTwo.textContent = inp.value * 3450
        compTitleValThree.textContent = inp.value * 6900 + inp.value * 3450 
    }

    if(repTitleTwo.classList.contains('active')){ 
        compTitleVal.textContent = inp.value * 7700
        compTitleValTwo.textContent = inp.value * 3850
        compTitleValThree.textContent = inp.value * 7700 + inp.value * 3850
    }

    if(repTitleThree.classList.contains('active')){ 
        compTitleVal.textContent = inp.value * 8600
        compTitleValTwo.textContent = inp.value * 4300
        compTitleValThree.textContent = inp.value * 8600 + inp.value * 4300
    }
})



houseTwo.addEventListener('click', () => { 
    houseOne.classList.remove('active')
    houseTwo.classList.add('active')
    houseThree.classList.remove('active')
    houseFour.classList.remove('active')
    repTitleOneB.textContent = 5900
    repTitleTwoB.textContent = 6700
    repTitleThreeB.textContent = 7600

    if(repTitleOne.classList.contains('active')){ 
        compTitleVal.textContent = inp.value * 5900
        compTitleValTwo.textContent = inp.value * 2950
        compTitleValThree.textContent = inp.value * 5900 + inp.value * 2950
    }

    if(repTitleTwo.classList.contains('active')){ 
        compTitleVal.textContent = inp.value * 6700
        compTitleValTwo.textContent = inp.value * 3350
        compTitleValThree.textContent = inp.value * 6700 + inp.value * 3350
    }

    if(repTitleThree.classList.contains('active')){ 
        compTitleVal.textContent = inp.value * 7600
        compTitleValTwo.textContent = inp.value * 3800
        compTitleValThree.textContent = inp.value * 7600 + inp.value * 3800
    }
})



houseThree.addEventListener('click', () => { 
    houseOne.classList.remove('active')
    houseTwo.classList.remove('active')
    houseThree.classList.add('active')
    houseFour.classList.remove('active')
    repTitleOneB.textContent = 7900
    repTitleTwoB.textContent = 8700
    repTitleThreeB.textContent = 9600

    if(repTitleOne.classList.contains('active')){ 
        compTitleVal.textContent = inp.value * 7900
        compTitleValTwo.textContent = inp.value * 3950
        compTitleValThree.textContent = inp.value * 7900 + inp.value * 3950
    }

    if(repTitleTwo.classList.contains('active')){ 
        compTitleVal.textContent = inp.value * 8700
        compTitleValTwo.textContent = inp.value * 4350
        compTitleValThree.textContent = inp.value * 8700 + inp.value * 4350
    }

    if(repTitleThree.classList.contains('active')){ 
        compTitleVal.textContent = inp.value * 9600
        compTitleValTwo.textContent = inp.value * 4800
        compTitleValThree.textContent = inp.value * 9600 + inp.value * 4800
    }
})



houseFour.addEventListener('click', () => { 
    houseOne.classList.remove('active')
    houseTwo.classList.remove('active')
    houseThree.classList.remove('active')
    houseFour.classList.add('active')
    repTitleOneB.textContent = 8900
    repTitleTwoB.textContent = 9700
    repTitleThreeB.textContent = 10600

    if(repTitleOne.classList.contains('active')){ 
        compTitleVal.textContent = inp.value * 8900
        compTitleValTwo.textContent = inp.value * 4450
        compTitleValThree.textContent = inp.value * 8900 + inp.value * 4450
    }

    if(repTitleTwo.classList.contains('active')){ 
        compTitleVal.textContent = inp.value * 9700
        compTitleValTwo.textContent = inp.value * 4850
        compTitleValThree.textContent = inp.value * 9700 + inp.value * 4850
    }

    if(repTitleThree.classList.contains('active')){ 
        compTitleVal.textContent = inp.value * 10600
        compTitleValTwo.textContent = inp.value * 5300
        compTitleValThree.textContent = inp.value * 10600 + inp.value * 5300
    }
})





repairOne.classList.add('active')
repTitleOne.classList.add('active')

repTitleOne.addEventListener('click', () =>{ 
    repairOne.classList.add('active')
    repTitleOne.classList.add('active')

    if(repTitleOne.classList.contains('active')){ 
    compTitleVal.textContent = inp.value * 6900
    compTitleValTwo.textContent = inp.value * 3450
    compTitleValThree.textContent = inp.value * 6900 + inp.value * 3450

        if(houseTwo.classList.contains('active')){ 
            compTitleVal.textContent = inp.value * 5900
            compTitleValTwo.textContent = inp.value * 2950
            compTitleValThree.textContent = inp.value * 5900 + inp.value * 2950
        }

        if(houseThree.classList.contains('active')){ 
            compTitleVal.textContent = inp.value * 7900
            compTitleValTwo.textContent = inp.value * 3950
            compTitleValThree.textContent = inp.value * 7900 + inp.value * 3950
        }

        if(houseFour.classList.contains('active')){ 
            compTitleVal.textContent = inp.value * 8900
            compTitleValTwo.textContent = inp.value * 4450
            compTitleValThree.textContent = inp.value * 8900 + inp.value * 4450
        }
        
    }

    repairTwo.classList.remove('active')
    repTitleTwo.classList.remove('active')

    repairThree.classList.remove('active')
    repTitleThree.classList.remove('active')
})




repTitleTwo.addEventListener('click', () =>{ 
    repairTwo.classList.add('active')
    repTitleTwo.classList.add('active')

    if(repTitleTwo.classList.contains('active')){ 
        compTitleVal.textContent = inp.value * 7700
        compTitleValTwo.textContent = inp.value * 3850
        compTitleValThree.textContent = inp.value * 7700 + inp.value * 3850

        if(houseTwo.classList.contains('active')){ 
            compTitleVal.textContent = inp.value * 6700
            compTitleValTwo.textContent = inp.value * 3350
            compTitleValThree.textContent = inp.value * 6700 + inp.value * 3350
        }

        if(houseThree.classList.contains('active')){ 
            compTitleVal.textContent = inp.value * 8700
            compTitleValTwo.textContent = inp.value * 4350
            compTitleValThree.textContent = inp.value * 8700 + inp.value * 4350
        }

        if(houseFour.classList.contains('active')){ 
            compTitleVal.textContent = inp.value * 9700
            compTitleValTwo.textContent = inp.value * 4850
            compTitleValThree.textContent = inp.value * 9700 + inp.value * 4850
        }
    }

    repairOne.classList.remove('active')
    repTitleOne.classList.remove('active')

    repairThree.classList.remove('active')
    repTitleThree.classList.remove('active')
})




repTitleThree.addEventListener('click', () =>{ 
    repairThree.classList.add('active')
    repTitleThree.classList.add('active')

    if(repTitleThree.classList.contains('active')){ 
        compTitleVal.textContent = inp.value * 8600
        compTitleValTwo.textContent = inp.value * 4300
        compTitleValThree.textContent = inp.value * 8600 + inp.value * 4300

        if(houseTwo.classList.contains('active')){ 
            compTitleVal.textContent = inp.value * 7600
            compTitleValTwo.textContent = inp.value * 3800
            compTitleValThree.textContent = inp.value * 7600 + inp.value * 3800
        }

        if(houseThree.classList.contains('active')){ 
            compTitleVal.textContent = inp.value * 9600
            compTitleValTwo.textContent = inp.value * 4800
            compTitleValThree.textContent = inp.value * 9600 + inp.value * 4800
        }

        if(houseFour.classList.contains('active')){ 
            compTitleVal.textContent = inp.value * 10600
            compTitleValTwo.textContent = inp.value * 5300
            compTitleValThree.textContent = inp.value * 10600 + inp.value * 5300
        }
    }

    repairOne.classList.remove('active')
    repTitleOne.classList.remove('active')

    repairTwo.classList.remove('active')
    repTitleTwo.classList.remove('active')
})

document.getElementById("ageInputId").addEventListener('input', update);
  update();