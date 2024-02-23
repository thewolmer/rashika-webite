export interface MessageEmbedType {
  title?: string;
  description?: string;
  fields?: Fields[];
  timestamp?: string;
  footer?: Footer;
}

interface Author {
  name?: string;
  icon_url?: string;
}
interface Fields {
  name?: string | number;
  value?: string | number;
  inline?: boolean;
}

interface Footer {
  text?: string;
  icon_url?: string;
  proxy_icon_url?: string;
}
