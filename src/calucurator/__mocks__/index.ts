const mock = jest.fn().mockImplementation(()=>{
    return {
        sum: jest.fn((a,b)=>a+b),
        veryComplexHandle: jest.fn(()=>"it's very hard...")
    }
});

export const mockCalucurator = jest.fn();
export default mock;