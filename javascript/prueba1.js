function calcularIVAgeneral(precio){
    const IVA = 0.21;
    const precioConIVA = precio * (1+IVA);
    return precioConIVA
}

function calcularIVAreducido(precio){
    const IVA = 0.1;
    const precioConIVA = precio * (1+IVA);
    return precioConIVA
}

function calcularIVAsuperreducido(precio){
    const IVA = 0.04;
    const precioConIVA = precio * (1+IVA);
    return precioConIVA
}

function calcularDescIRPF(precio){
    const IRPF = 0.15;
    const descuentoIRPF = (precio * IRPF);
    return descuentoIRPF
}

function calcularPrecioConIRPF(precio){
    const IRPF = 0.15;
    const precioIRPF = precio * (1-IRPF);
    return precioIRPF
}