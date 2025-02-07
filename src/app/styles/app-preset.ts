//Preset the theme with your customizations for the PrimeNG components
import { definePreset } from '@primeng/themes';
import Lara from '@primeng/themes/lara';
// import Material from '@primeng/themes/material';
// import Aura from '@primeng/themes/aura';
// import Nora from '@primeng/themes/nora';

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
            950: '{indigo.950}'
        },
        secondary: {
            50: '{red.50}',
            100: '{red.100}',
            200: '{red.200}',
            300: '{red.300}',
            400: '{red.400}',
            500: '{red.500}',
            600: '{red.600}',
            700: '{red.700}',
            800: '{red.800}',
            900: '{red.900}',
            950: '{red.950}'
        },
        colorScheme: {

        }
    }
});


// export const Noir = definePreset(Aura, {
//     semantic: {
//         primary: {
//             50: '{gray.50}',
//             100: '{gray.100}',
//             200: '{gray.200}',
//             300: '{gray.300}',
//             400: '{gray.400}',
//             500: '{gray.500}',
//             600: '{gray.600}',
//             700: '{gray.700}',
//             800: '{gray.800}',
//             900: '{gray.900}',
//             950: '{gray.950}'
//         },
//         colorScheme: {
//             light: {
//                 primary: {
//                     color: '{gray.950}',
//                     inverseColor: '#ffffff',
//                     hoverColor: '{gray.900}',
//                     activeColor: '{gray.800}'
//                 },
//                 highlight: {
//                     background: '{gray.950}',
//                     focusBackground: '{gray.700}',
//                     color: '#ffffff',
//                     focusColor: '#ffffff'
//                 }
//             },
//             dark: {
//                 primary: {
//                     color: '{gray.50}',
//                     inverseColor: '{gray.950}',
//                     hoverColor: '{gray.100}',
//                     activeColor: '{gray.200}'
//                 },
//                 highlight: {
//                     background: 'rgba(250, 250, 250, .16)',
//                     focusBackground: 'rgba(250, 250, 250, .24)',
//                     color: 'rgba(255,255,255,.87)',
//                     focusColor: 'rgba(255,255,255,.87)'
//                 }
//             }
//         }
//     }
// });
