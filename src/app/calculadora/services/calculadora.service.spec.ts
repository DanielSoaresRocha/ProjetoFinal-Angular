import { TestBed, inject } from '@angular/core/testing';

import { CalculadoraService } from './calculadora.service';

describe('CalculadoraService', () => {
  let service: CalculadoraService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CalculadoraService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('deve garantir que 1 + 4 = 5', () => {
    inject([CalculadoraService], (service: CalculadoraService) => {
      let soma = service.calcular(1, 4, CalculadoraService.SOMA)
      expect(soma).toEqual(5)
    })
  });

  it('deve garantir que 1 - 4 = -3', () => {
    inject([CalculadoraService], (service: CalculadoraService) => {
      let soma = service.calcular(1, 4, CalculadoraService.SOMA)
      expect(soma).toEqual(-3)
    })
  });

  it('deve garantir que 1 / 4 = 0.25', () => {
    inject([CalculadoraService], (service: CalculadoraService) => {
      let soma = service.calcular(1, 4, CalculadoraService.SOMA)
      expect(soma).toEqual(0.25)
    })
  });

  it('deve garantir que 1 * 4 = 4', () => {
    inject([CalculadoraService], (service: CalculadoraService) => {
      let soma = service.calcular(1, 4, CalculadoraService.SOMA)
      expect(soma).toEqual(4)
    })
  });

  it('deve retornar 0 para operacao inválida', () => {
    inject([CalculadoraService], (service: CalculadoraService) => {
      let soma = service.calcular(1, 4, '%')
      expect(soma).toEqual(0)
    })
  });
});
