import { SafeHtml } from '@angular/platform-browser'

type FieldRegexpPatter = {
    "ignore_case": boolean,
    "regex_negative": boolean,
    "telephone_pattern": string
}

type FormField = {
    "type": string,
    "required": boolean,
    "label": string,
    "initial"?: string,
    "help_text"?: string,
    "error_messages": {
        [key: string]: string
    },
    "widget": {
        "type": string,
        "is_hidden": boolean,
        "needs_multipart_form": boolean,
        "is_localized": boolean,
        "is_required": boolean,
        "attrs": {
            "patterns": [FieldRegexpPatter]
        },
        "input_type": string
    },
    "min_length": 9,
    "max_length": 16,
    "choices"?: [{ display: string, value: string }]
}


export type RegistrationFields = {
    "form_conditions": [],
    "user_ip_country": string,
    "special_errors": [],
    "fields": {
        [key: string]: FormField

    },
    "ordered_fields": [string],
    "default_errors": {
        [key: string]: string
    },
    "current": string,
    "steps": [{
        [key: string]: string
    }]
}

export type RegistrationStepResponse = {
    "step": string
}

export type RegistrationCmsInfo = {
    "signupCmsInfo": {
        "registrationComplete": {
          "html": string,
          safehtml?: SafeHtml
        },
        "firstStepTeaser": {
          "html": string,
          safehtml?: SafeHtml
        }
    }
}