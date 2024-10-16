export interface II18N {
    headerTitleOne:          string;
    headerTitleTwo:          string;
    headerTitleThree:        string;
    title:                   string;
    description:             string;
    mainTitle:               string;
    mainBadgeTitle:          string;
    mainDescription:         string;
    experienceTitle:         string;
    projectsTitle:           string;
    experiences:             Experiences;
    projects:                Projects;
    experencieItemTitle:     string;
    experienceItemGoalTitle: string;
    experienceItemTagsTitle: string;
    greetings:               string;
}

export interface Experiences {
    one: ExperiencesItem;
    two: ExperiencesItem;
}

export interface ExperiencesItem {
    date:            string;
    title:           string;
    reponsabilities: string;
    goals:           string;
}

export interface Projects {
    one: ProjectsItem;
    two: ProjectsItem;
}

export interface ProjectsItem {
    title:       string;
    description: string;
}
