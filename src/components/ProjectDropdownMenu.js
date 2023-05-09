import React, { useState, useEffect } from "react";
import * as browser from "webextension-polyfill";
import {
  Button,
  Menu,
  MenuButton,
  Icon,
  MenuList,
  MenuItem,
  Spinner,
} from "@chakra-ui/react";
import { RiArrowDownSLine } from "react-icons/ri";

export default function ProjectDropdownMenu({selectedProject, setSelectedProject}) {
  const [projects, setProjects] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    browser.runtime
      .sendMessage({ type: "getProjectData" })
      .then((result) => {
        setProjects(result);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setIsLoading(false);
      });
  }, []);

  const handleProjectSelect = (project) => {
    setSelectedProject(project);
  };

  return (
    <Menu isLazy>
      <MenuButton
        as={Button}
        w="100%"
        rightIcon={<Icon as={RiArrowDownSLine} />}
      >
        {isLoading ? (
          <Spinner />
        ) : selectedProject ? (
          selectedProject.name
        ) : (
          "Select a project"
        )}
      </MenuButton>
      <MenuList>
        {projects.map((project) => (
          <MenuItem
            key={project.id}
            onClick={() => handleProjectSelect(project)}
          >
            {project.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
}
