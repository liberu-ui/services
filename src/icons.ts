/**
 * This file imports the necessary icons from the '@fortawesome/free-solid-svg-icons' package
 * and adds them to the FontAwesome library.
 */

import { library, IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { faHandshake } from '@fortawesome/free-solid-svg-icons';

/**
 * Adds the faHandshake icon to the FontAwesome library.
 */
library.add(faHandshake as IconDefinition);

export {} as IconDefinition;