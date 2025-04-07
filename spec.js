describe("Функция getArrayParams", function() {
  it("должна корректно возвращать min, max и avg для (-99, 99, 10)", function() {
    const result = getArrayParams(-99, 99, 10);
    expect(result.min).toBe(-99);
    expect(result.max).toBe(99);
    expect(result.avg).toBeCloseTo(3.33, 2);
  });

  it("должна корректно работать с одним числом", function() {
    const result = getArrayParams(5);
    expect(result.min).toBe(5);
    expect(result.max).toBe(5);
    expect(result.avg).toBe(5);
  });
});

describe("Насадка summElementsWorker", function() {
  it("должна возвращать 0 при пустом вводе", function() {
    expect(summElementsWorker()).toBe(0);
  });

  it("должна корректно суммировать элементы", function() {
    expect(summElementsWorker(10, 10, 11, 20, 10)).toBe(61);
  });
});

describe("Насадка differenceMaxMinWorker", function() {
  it("должна возвращать 0 при пустом массиве", function() {
    expect(differenceMaxMinWorker()).toBe(0);
  });

  it("должна возвращать корректную разницу между max и min", function() {
    expect(differenceMaxMinWorker(10, 10, 11, 20, 10)).toBe(10);
  });
});

describe("Насадка differenceEvenOddWorker", function() {
  it("должна возвращать корректную разницу чётных и нечётных", function() {
    expect(differenceEvenOddWorker(94, 51, 57, 41, 47, 66, 58, 10, 38, 17)).toBe(53);
    expect(differenceEvenOddWorker(15, 97, 85, 64, 67, 10, 69, 40, 15, 35)).toBe(-269);
  });
});

describe("Насадка averageEvenElementsWorker", function() {
  it("должна возвращать среднее чётных элементов", function() {
    expect(averageEvenElementsWorker(1, 2, 3, 4, 5, 6, 7, 8, 9)).toBe(5);
    expect(averageEvenElementsWorker(15, 97, 85, 64, 67, 10, 69, 40, 15, 35)).toBe(38);
  });

  it("должна возвращать 0, если чётных нет", function() {
    expect(averageEvenElementsWorker(1, 3, 5, 7)).toBe(0);
  });
});

describe("Агрегатор makeWork", function() {
  const arr = [
    [10, 10, 11, 20, 10],
    [67, 10, 2, 39, 88],
    [72, 75, 51, 87, 43],
    [30, 41, 55, 96, 62]
  ];

  it("возвращает максимальную сумму из summElementsWorker", function() {
    expect(makeWork(arr, summElementsWorker)).toBe(328);
  });

  it("возвращает максимальную разницу max - min", function() {
    expect(makeWork(arr, differenceMaxMinWorker)).toBe(86);
  });

  it("возвращает максимальную разницу чётных и нечётных", function() {
    expect(makeWork(arr, differenceEvenOddWorker)).toBe(92);
  });

  it("возвращает максимальное среднее чётных", function() {
    const result = makeWork(arr, averageEvenElementsWorker);
    expect(result).toBeCloseTo(72, 0);
  });
});
