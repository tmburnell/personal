class RangedNumber {
  private value: number;

  constructor(private minVal = 1, private maxVal = 100) {
    if (minVal > maxVal) {
      throw new RangeError('min value is great than max value');
    }
  }

  public setValue(value: number) {
    if (this.isValid(value)) {
      this.value = value;
    } else {
      throw new RangeError(`${value} does not fall between ${this.minVal} and ${this.maxVal}`);
    }
  }

  public getValue(): number {
    return this.value;
  }

  private isValid(value: number): boolean {
    return (value <= this.maxVal && value >= this.minVal);
  }
}

export class Skill {
  name: string;
  level: RangedNumber;
  description?: string;
}

export class SkillSet {
  constructor(obj) {
    this.title = obj.title;
    this.skills = obj.skills;
  }

  title: string;        // Skills will be grouped by title
  skills: Array<Skill>;
}

export type SkillSets = Array<SkillSet>;
