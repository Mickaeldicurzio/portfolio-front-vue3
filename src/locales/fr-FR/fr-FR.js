import {homeMessage} from "@/locales/fr-FR/homeMessage";
import {projectListMessage} from "@/locales/fr-FR/projectListMessage";
import {projectFullMessage} from "@/locales/fr-FR/projectFullMessage";
import {menuMessage} from "@/locales/fr-FR/menuMessage";
import {aboutMeMessage} from "@/locales/fr-FR/aboutMeMessage";
import {footerMessage} from "@/locales/fr-FR/footerMessage";
import {experiencesMessage} from "@/locales/fr-FR/experiencesMessage";
import {metaMessage} from "@/locales/fr-FR/metaMessage";
import {timelineMessage} from "@/locales/fr-FR/timeline";


const frMessage = {
    ...homeMessage,
    ...experiencesMessage,
    ...projectListMessage,
    ...projectFullMessage,
    ...menuMessage,
    ...aboutMeMessage,
    ...footerMessage,
    ...metaMessage,
    ...timelineMessage
}

export { frMessage }