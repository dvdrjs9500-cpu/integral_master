/**
 * Auto-generated entity types
 * Contains all CMS collection interfaces in a single file 
 */

/**
 * Collection ID: calculationmethods
 * Interface for CalculationMethods
 */
export interface CalculationMethods {
  _id: string;
  _createdDate?: Date;
  _updatedDate?: Date;
  /** @wixFieldType text */
  methodName?: string;
  /** @wixFieldType text */
  mathematicalTheory?: string;
  /** @wixFieldType text */
  usageInstructions?: string;
  /** @wixFieldType text */
  coreFormula?: string;
  /** @wixFieldType text */
  exampleProblem?: string;
  /** @wixFieldType image - Contains image URL, render with <Image> component, NOT as text */
  methodDiagram?: string;
}
