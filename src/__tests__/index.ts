import Calucurator from '../calucurator';
jest.mock('../calucurator')

describe('jest',()=>{

    it('jest test',()=>{
        expect(1).toBe(1);
    });


    it("sum",()=>{
        const a = 1;
        const b = 2;
        const c: Calucurator = new Calucurator();
        expect(c.sum(a,b)).toBe(a+b);
    });

    it("veryComplexHandle",()=>{
        const c: Calucurator = new Calucurator();
        expect(c.veryComplexHandle()).toBe("it's very hard...");
    });

});