import React, { useState, useEffect } from "react";
import { invoke } from "@tauri-apps/api/core";
import { RepoIcon } from "@primer/octicons-react";
import Database from "@tauri-apps/plugin-sql";
import Card from "./Card";

export default function Project() {
  const [project, setProject] = useState({
    name: "high-seas",
    remoteName: "origin",
  });

  useEffect(() => {
    Database.load("sqlite:test.db").then((db) => {
      console.log(db);
    });
    // const db = await
    // const res = await db.execute(`
    //   BEGIN TRANSACTION;
    //   CREATE TABLE IF NOT EXISTS test (
    //       id INTEGER PRIMARY KEY,
    //       project_name TEXT,
    //       status TEXT
    //   );

    //   SELECT project_name
    //   FROM test
    //   WHERE status = 'active'
    //   LIMIT 1;

    //   COMMIT;
    //   `);
    // console.log(res);
    console.log("mounted");
  }, []);

  const pick = async () => {
    await invoke("select_project");

    // setProjectPath(    setGreetMsg(await invoke("greet", { name })););
  };

  return (
    <Card onClick={pick}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "1rem",
          flexDirection: "row",
        }}
      >
        <p>{project.name}</p>
        <p style={{ fontSize: "0.8em" }}>
          <RepoIcon size={16} />
          <span style={{ marginLeft: "0.25em" }}>{project.remoteName}</span>
        </p>
      </div>
    </Card>
  );
}
