exports.handler = async (event) => {
    let name = event.plant
    let plant;
    switch(name){
        case 'Portulacaria afra':
            plant = {
                light: 60000,
                hum: 5
            }
            break;
        case 'Psidium guajava':
            plant = {
                light: 50000,
                hum: 7
            }
            break;
        case 'Cupressus macrocarpa':
            plant = {
                light: 50000,
                hum: 6
            }
            break;
        case 'Rosa chinensis':
            plant = {
                light: 60000,
                hum: 8
            }
            break;
        case 'Persea americana':
            plant = {
                light: 70000,
                hum: 7
            }
            break;
        case 'Nymphaea odorata ':
            plant = {
                light: 60000,
                hum: 10
            }
            break;
        case 'Epipremnum aureum':
            plant = {
                light: 40000,
                hum: 7
            }
            break;
        case 'Lophophora williamsii':
            plant = {
                light: 80000,
                hum: 2
            }
            break;
    }
    return plant;
};
