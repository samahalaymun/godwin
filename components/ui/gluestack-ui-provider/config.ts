"use client";
import { vars } from "nativewind";

/**
 * Neutral balanced theme built from your palette:
 * primary:   #E0BFB8  -> RGB(224,191,184)
 * background:#FDF6F5  -> RGB(253,246,245)
 * text:      #4A3B38  -> RGB(74,59,56)
 * border:    #F2D9D5  -> RGB(242,217,213)
 * white:     #FFFFFF  -> RGB(255,255,255)
 * textLight: #C9A9A6  -> RGB(201,169,166)
 * card:      #FFFFFF  -> RGB(255,255,255)
 * shadow:    #000000  -> RGB(0,0,0)
 *
 * Approach:
 * - 500 = base color from palette
 * - <500 = lighter tints toward background/white
 * - >500 = darker shades toward text/black
 */

export const config = {
  light: vars({
    /* Primary (based on #E0BFB8) */
    "--color-primary-0": "253 251 250",
    "--color-primary-50": "250 245 244",
    "--color-primary-100": "246 239 237",
    "--color-primary-200": "238 227 224",
    "--color-primary-300": "230 215 211",
    "--color-primary-400": "216 203 198",
    "--color-primary-500": "224 191 184", // base
    "--color-primary-600": "203 173 167",
    "--color-primary-700": "176 149 144",
    "--color-primary-800": "139 118 114",
    "--color-primary-900": "101 86 84",
    "--color-primary-950": "70 60 58",

    /* Secondary (derived from textLight #C9A9A6) */
    "--color-secondary-0": "255 254 253",
    "--color-secondary-50": "251 247 244",
    "--color-secondary-100": "245 238 234",
    "--color-secondary-200": "236 224 219",
    "--color-secondary-300": "223 207 201",
    "--color-secondary-400": "208 188 182",
    "--color-secondary-500": "201 169 166", // base (textLight)
    "--color-secondary-600": "182 153 149",
    "--color-secondary-700": "156 129 124",
    "--color-secondary-800": "123 102 99",
    "--color-secondary-900": "84 70 68",
    "--color-secondary-950": "44 36 35",

    /* Tertiary (derived from text #4A3B38 — used for deep accents) */
    "--color-tertiary-0": "250 248 247",
    "--color-tertiary-50": "244 240 239",
    "--color-tertiary-100": "236 229 227",
    "--color-tertiary-200": "221 209 206",
    "--color-tertiary-300": "200 184 181",
    "--color-tertiary-400": "160 138 135",
    "--color-tertiary-500": "74 59 56", // base (text)
    "--color-tertiary-600": "63 50 48",
    "--color-tertiary-700": "50 40 38",
    "--color-tertiary-800": "36 29 28",
    "--color-tertiary-900": "22 18 17",
    "--color-tertiary-950": "12 10 10",

    /* Error (derived as warm red for contrast) */
    "--color-error-0": "255 241 241",
    "--color-error-50": "255 229 229",
    "--color-error-100": "255 205 205",
    "--color-error-200": "252 165 165",
    "--color-error-300": "248 113 113",
    "--color-error-400": "239 68 68",
    "--color-error-500": "220 38 38",
    "--color-error-600": "185 28 28",
    "--color-error-700": "153 27 27",
    "--color-error-800": "127 29 29",
    "--color-error-900": "83 19 19",
    "--color-error-950": "55 10 10",

    /* Success (soft green tuned to neutral palette) */
    "--color-success-0": "246 255 250",
    "--color-success-50": "232 255 241",
    "--color-success-100": "208 250 227",
    "--color-success-200": "177 239 204",
    "--color-success-300": "140 215 172",
    "--color-success-400": "100 185 132",
    "--color-success-500": "52 131 82",
    "--color-success-600": "42 121 72",
    "--color-success-700": "32 111 62",
    "--color-success-800": "22 101 52",
    "--color-success-900": "20 83 45",
    "--color-success-950": "15 60 33",

    /* Warning (warm amber derived from primary hue) */
    "--color-warning-0": "255 251 245",
    "--color-warning-50": "255 244 232",
    "--color-warning-100": "255 236 214",
    "--color-warning-200": "254 220 181",
    "--color-warning-300": "253 194 136",
    "--color-warning-400": "251 165 94",
    "--color-warning-500": "231 129 40",
    "--color-warning-600": "215 108 31",
    "--color-warning-700": "180 90 26",
    "--color-warning-800": "130 68 23",
    "--color-warning-900": "108 56 19",
    "--color-warning-950": "84 45 18",

    /* Info (calm blue for UI info states) */
    "--color-info-0": "247 251 253",
    "--color-info-50": "232 245 251",
    "--color-info-100": "212 237 248",
    "--color-info-200": "185 224 243",
    "--color-info-300": "150 205 235",
    "--color-info-400": "110 185 225",
    "--color-info-500": "13 166 242",
    "--color-info-600": "11 141 205",
    "--color-info-700": "9 115 168",
    "--color-info-800": "7 90 131",
    "--color-info-900": "5 64 93",
    "--color-info-950": "3 38 56",

    /* Typography (dark tones for text on light bg) */
    "--color-typography-0": "255 255 255",
    "--color-typography-50": "250 249 248",
    "--color-typography-100": "240 238 237",
    "--color-typography-200": "225 221 220",
    "--color-typography-300": "200 191 189",
    "--color-typography-400": "160 138 135",
    "--color-typography-500": "140 120 118",
    "--color-typography-600": "115 95 92",
    "--color-typography-700": "90 74 72",
    "--color-typography-800": "64 45 44",
    "--color-typography-900": "38 27 26",
    "--color-typography-950": "23 16 15",

    /* Outline (borders / dividers) */
    "--color-outline-0": "255 255 255",
    "--color-outline-50": "251 248 247",
    "--color-outline-100": "244 240 239",
    "--color-outline-200": "236 229 227",
    "--color-outline-300": "227 219 216",
    "--color-outline-400": "210 196 193",
    "--color-outline-500": "190 173 170",
    "--color-outline-600": "170 152 149",
    "--color-outline-700": "140 125 122",
    "--color-outline-800": "100 86 84",
    "--color-outline-900": "65 56 55",
    "--color-outline-950": "40 34 33",

    /* Background scale (based on background #FDF6F5) */
    "--color-background-0": "255 255 255",
    "--color-background-50": "253 249 248",
    "--color-background-100": "251 246 244",
    "--color-background-200": "247 240 237",
    "--color-background-300": "240 232 229",
    "--color-background-400": "233 224 221",
    "--color-background-500": "253 246 245", // base background
    "--color-background-600": "236 226 224",
    "--color-background-700": "214 200 197",
    "--color-background-800": "184 171 168",
    "--color-background-900": "146 132 129",
    "--color-background-950": "100 90 88",

    /* Background Special */
    "--color-background-error": "255 241 241",
    "--color-background-warning": "255 244 236",
    "--color-background-success": "237 252 242",
    "--color-background-muted": "247 248 247",
    "--color-background-info": "235 248 254",

    /* Focus Ring Indicator  */
    "--color-indicator-primary": "224 191 184",
    "--color-indicator-info": "83 153 236",
    "--color-indicator-error": "185 28 28",
  }),
  dark: vars({
    /* Primary */
    "--color-primary-0": "253 252 251",
    "--color-primary-50": "247 242 241",
    "--color-primary-100": "240 236 234",
    "--color-primary-200": "224 212 209",
    "--color-primary-300": "204 190 187",
    "--color-primary-400": "186 174 170",
    "--color-primary-500": "224 191 184", // keep base for harmony
    "--color-primary-600": "200 170 162",
    "--color-primary-700": "170 145 135",
    "--color-primary-800": "135 112 105",
    "--color-primary-900": "98 81 76",
    "--color-primary-950": "60 50 46",

    /* Secondary */
    "--color-secondary-0": "11 12 12",
    "--color-secondary-50": "24 23 23",
    "--color-secondary-100": "39 38 38",
    "--color-secondary-200": "63 64 64",
    "--color-secondary-300": "81 82 82",
    "--color-secondary-400": "94 95 95",
    "--color-secondary-500": "114 115 115",
    "--color-secondary-600": "140 141 141",
    "--color-secondary-700": "170 171 171",
    "--color-secondary-800": "200 201 201",
    "--color-secondary-900": "230 231 231",
    "--color-secondary-950": "250 250 250",

    /* Tertiary (dark reversed) */
    "--color-tertiary-0": "84 49 18",
    "--color-tertiary-50": "108 61 19",
    "--color-tertiary-100": "130 73 23",
    "--color-tertiary-200": "180 98 26",
    "--color-tertiary-300": "215 117 31",
    "--color-tertiary-400": "231 129 40",
    "--color-tertiary-500": "251 157 75",
    "--color-tertiary-600": "253 180 116",
    "--color-tertiary-700": "254 209 170",
    "--color-tertiary-800": "255 233 213",
    "--color-tertiary-900": "255 242 229",
    "--color-tertiary-950": "255 250 245",

    /* Error (dark) */
    "--color-error-0": "83 19 19",
    "--color-error-50": "127 29 29",
    "--color-error-100": "153 27 27",
    "--color-error-200": "185 28 28",
    "--color-error-300": "220 38 38",
    "--color-error-400": "230 53 53",
    "--color-error-500": "239 68 68",
    "--color-error-600": "248 113 113",
    "--color-error-700": "252 165 165",
    "--color-error-800": "254 202 202",
    "--color-error-900": "254 226 226",
    "--color-error-950": "254 233 233",

    /* Success */
    "--color-success-0": "27 50 36",
    "--color-success-50": "20 83 45",
    "--color-success-100": "22 101 52",
    "--color-success-200": "32 111 62",
    "--color-success-300": "42 121 72",
    "--color-success-400": "52 131 82",
    "--color-success-500": "72 151 102",
    "--color-success-600": "102 181 132",
    "--color-success-700": "132 211 162",
    "--color-success-800": "162 241 192",
    "--color-success-900": "202 255 232",
    "--color-success-950": "228 255 244",

    /* Warning */
    "--color-warning-0": "84 45 18",
    "--color-warning-50": "108 56 19",
    "--color-warning-100": "130 68 23",
    "--color-warning-200": "180 90 26",
    "--color-warning-300": "215 108 31",
    "--color-warning-400": "231 120 40",
    "--color-warning-500": "251 149 75",
    "--color-warning-600": "253 173 116",
    "--color-warning-700": "254 205 170",
    "--color-warning-800": "255 231 213",
    "--color-warning-900": "255 249 245",
    "--color-warning-950": "255 253 251",

    /* Info */
    "--color-info-0": "3 38 56",
    "--color-info-50": "5 64 93",
    "--color-info-100": "7 90 131",
    "--color-info-200": "9 115 168",
    "--color-info-300": "11 141 205",
    "--color-info-400": "13 166 242",
    "--color-info-500": "50 180 244",
    "--color-info-600": "87 194 246",
    "--color-info-700": "124 207 248",
    "--color-info-800": "162 221 250",
    "--color-info-900": "199 235 252",
    "--color-info-950": "236 248 254",

    /* Typography (dark theme reversed, light typography) */
    "--color-typography-0": "23 23 23",
    "--color-typography-50": "38 38 39",
    "--color-typography-100": "64 64 64",
    "--color-typography-200": "82 82 82",
    "--color-typography-300": "115 115 115",
    "--color-typography-400": "140 140 140",
    "--color-typography-500": "163 163 163",
    "--color-typography-600": "212 212 212",
    "--color-typography-700": "219 219 220",
    "--color-typography-800": "229 229 229",
    "--color-typography-900": "245 245 245",
    "--color-typography-950": "254 254 255",

    /* Outline */
    "--color-outline-0": "26 23 23",
    "--color-outline-50": "39 38 36",
    "--color-outline-100": "65 65 65",
    "--color-outline-200": "83 82 82",
    "--color-outline-300": "115 116 116",
    "--color-outline-400": "140 141 141",
    "--color-outline-500": "165 163 163",
    "--color-outline-600": "211 211 211",
    "--color-outline-700": "221 220 219",
    "--color-outline-800": "230 230 230",
    "--color-outline-900": "243 243 243",
    "--color-outline-950": "253 254 254",

    /* Background (dark scale reversed) */
    "--color-background-0": "18 18 18",
    "--color-background-50": "39 38 37",
    "--color-background-100": "65 64 64",
    "--color-background-200": "83 82 82",
    "--color-background-300": "116 116 116",
    "--color-background-400": "142 142 142",
    "--color-background-500": "162 163 163",
    "--color-background-600": "213 212 212",
    "--color-background-700": "220 219 219",
    "--color-background-800": "242 241 241",
    "--color-background-900": "246 246 246",
    "--color-background-950": "254 254 254",

    /* Background Special */
    "--color-background-error": "66 43 43",
    "--color-background-warning": "65 47 35",
    "--color-background-success": "28 43 33",
    "--color-background-muted": "51 51 51",
    "--color-background-info": "26 40 46",

    /* Focus Ring Indicator  */
    "--color-indicator-primary": "247 247 247",
    "--color-indicator-info": "161 199 245",
    "--color-indicator-error": "232 70 69",
  }),
};
