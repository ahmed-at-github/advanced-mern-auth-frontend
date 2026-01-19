import { Laptop, LucideIcon, Smartphone } from "lucide-react";
import { UAParser } from "ua-parser-js";
import { format, formatDistanceToNowStrict, isPast } from "date-fns";

interface AgentType {
    deviceType: string;
    browser: string;
    os: string;
    timeAgo: string;
    icon: LucideIcon;
}

export const parseUserAgent = (userAgent: string, createdAt: string): AgentType => {
    const result = UAParser(userAgent);
 
// console.log( result , "ct");

    const deviceType = result.device.type || "Desktop";
    const browser = result.browser.name || "Web";
    const os = `${result.os.name}`+ (result.os.version ? ` ${result.os.version}` : "");
    const icon = deviceType === "mobile" ? Smartphone : Laptop;

    const formattedAt = isPast(new Date(createdAt)) ? `${formatDistanceToNowStrict(new Date(createdAt))} ago` : format(new Date(createdAt), "d MMM, yyyy");

    return {
        deviceType,
        browser,
        os,
        timeAgo: formattedAt,
        icon,
    };
}