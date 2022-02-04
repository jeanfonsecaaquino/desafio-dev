const MapValue = (init: number, end: number, atribute: string) => (target: Object, propertyKey: string, descriptor: PropertyDescriptor) => {
    const originalMethod = descriptor.value;
    descriptor.value = function (...args : any) {
        const linha : string = Object.assign(this).linha;
        Object.assign(this)[atribute] = linha.substring(init - 1, end);
        originalMethod.apply(this, args);
    }
    return descriptor;
  }; 

export default MapValue;