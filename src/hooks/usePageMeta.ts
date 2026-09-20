import { useEffect } from "react";

/** Per-page title and description for SEO and tab titles. */
export function usePageMeta(title: string, description?: string) {
  useEffect(() => {
    document.title = title === "DTV Mounting" ? title : `${title} | DTV Mounting`;
    if (!description) return;
    let tag = document.querySelector<HTMLMetaElement>('meta[name="description"]');
    if (!tag) { tag = document.createElement("meta"); tag.name = "description"; document.head.appendChild(tag); }
    tag.content = description;
  }, [title, description]);
}
