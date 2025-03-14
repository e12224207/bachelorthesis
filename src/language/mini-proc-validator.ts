import type { ValidationAcceptor, ValidationChecks } from 'langium';
import type { MiniProcAstType, Person } from './generated/ast.js';
import type { MiniProcServices } from './mini-proc-module.js';

/**
 * Register custom validation checks.
 */
export function registerValidationChecks(services: MiniProcServices) {
    const registry = services.validation.ValidationRegistry;
    const validator = services.validation.MiniProcValidator;
    const checks: ValidationChecks<MiniProcAstType> = {
        Person: validator.checkPersonStartsWithCapital
    };
    registry.register(checks, validator);
}

/**
 * Implementation of custom validations.
 */
export class MiniProcValidator {

    checkPersonStartsWithCapital(person: Person, accept: ValidationAcceptor): void {
        if (person.name) {
            const firstChar = person.name.substring(0, 1);
            if (firstChar.toUpperCase() !== firstChar) {
                accept('warning', 'Person name should start with a capital.', { node: person, property: 'name' });
            }
        }
    }

}
