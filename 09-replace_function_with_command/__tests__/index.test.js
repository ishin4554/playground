import score from "../index";

describe('replace function with command', function () {
  test('should be score', function () {
    const medicalExam = {
      isSmoker: true,
    }
    const candidate = {
      originState: 10
    }
    const scoringGuide = {
      stateWithLowCertification: (state) => state > 5
    }
    expect(score(candidate, medicalExam, scoringGuide)).toBe(-10);
  });
});
