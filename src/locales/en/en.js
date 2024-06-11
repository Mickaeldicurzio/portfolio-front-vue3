import {homeMessage} from "@/locales/en/homeMessage";
import {projectListMessage} from "@/locales/en/projectListMessage";
import {projectFullMessage} from "@/locales/en/projectFullMessage";
import {menuMessage} from "@/locales/en/menuMessage";
import {aboutMeMessage} from "@/locales/en/aboutMeMessage";
import {footerMessage} from "@/locales/en/footerMessage";
import {experiencesMessage} from "@/locales/en/experiencesMessage";


const enMessage = {
    ...homeMessage,
    ...experiencesMessage,
    ...projectFullMessage,
    ...projectListMessage,
    ...menuMessage,
    ...aboutMeMessage,
    ...footerMessage
}

export {enMessage}