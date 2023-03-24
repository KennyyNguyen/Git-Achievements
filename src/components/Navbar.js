import React from "react";
import { UnderlineNav } from "@primer/react/drafts";
import {
  CodeIcon,
  IssueOpenedIcon,
  GitPullRequestIcon,
  CommentDiscussionIcon,
  EyeIcon,
} from "@primer/octicons-react";

export default function Navbar() {
  return (
    <div>
      <UnderlineNav aria-label="Repository">
        <UnderlineNav.Item aria-current="page" icon={CodeIcon}>
          Code
        </UnderlineNav.Item>
        <UnderlineNav.Item icon={IssueOpenedIcon} counter={30}>
          Issues
        </UnderlineNav.Item>
        <UnderlineNav.Item icon={GitPullRequestIcon} counter={3}>
          Pull Requests
        </UnderlineNav.Item>
        <UnderlineNav.Item icon={CommentDiscussionIcon}>
          Discussions
        </UnderlineNav.Item>
        <UnderlineNav.Item icon={EyeIcon} counter={9}>
          Actions
        </UnderlineNav.Item>
        <UnderlineNav.Item icon={EyeIcon} counter={7}>
          Projects
        </UnderlineNav.Item>
      </UnderlineNav>
    </div>
  );
}
