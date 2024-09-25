export type NavItem = {
    title: string;
    href: string;
    disabled? : boolean;
};


export type  SiteConfig ={
    name : string;
    description: string;
    url: string;
    onImage: string;
    links:{
        x: string;
        github: string;
    };
};

export type HomeConfig = {
    mainNav: NavItem[];
}
