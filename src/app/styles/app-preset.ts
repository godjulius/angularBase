//Preset the theme with your customizations for the PrimeNG components
import { definePreset } from '@primeng/themes';
import Lara from '@primeng/themes/lara';
import Aura from '@primeng/themes/aura';

export const appPreset = definePreset(Lara, {
    //Your customizations, see the following sections for examples
    semantic: {
        primary: {
            50: '{indigo.50}',
            100: '{indigo.100}',
            200: '{indigo.200}',
            300: '{indigo.300}',
            400: '{indigo.400}',
            500: '{indigo.500}',
            600: '{indigo.600}',
            700: '{indigo.700}',
            800: '{indigo.800}',
            900: '{indigo.900}',
            950: '{indigo.950}',
        },
        background: {
            500: '{neutral.100}',
        },
        colorScheme: {
            light: {
            },
            dark: {
                background: {
                    500: '{neutral.950}',
                },
                formField: {
                    background: '{slate.900}',
                },
                primary: {
                    contrast: {
                        color: '{neutral.50}'
                    },
                },
            }
        }
    }
});
