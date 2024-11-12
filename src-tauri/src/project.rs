use git2::{Cred, Direction, RemoteCallbacks, Repository};
use tauri_plugin_dialog::DialogExt;

#[tauri::command]
pub fn select_project(app_handle: tauri::AppHandle) {
    app_handle.dialog().file().pick_folder(|dir_path| {
        if let Some(p) = dir_path {
            println!("{:#?}", p);

            let repo = Repository::open(p.as_path().expect("a path!")).expect("a repo!");
            // let remotes = repo.remotes().unwrap().iter();
            // for remote in remotes.iter() {
            //     println!("{:?}", remote);
            // }
            let mut origin = repo.find_remote("origin").unwrap();

            let mut callbacks = RemoteCallbacks::new();
            callbacks.credentials(|_url, username_from_url, _allowed_types| {
                println!("{_url} {:?} {:?}", username_from_url, _allowed_types);
                Cred::ssh_key_from_agent("malted")
            });

            origin
                .connect_auth(Direction::Fetch, Some(callbacks), None)
                .expect("couldn't connect");

            for rem in repo.remotes().unwrap().iter() {
                println!("{:?}", rem);
            }

            println!("{:?} {:?}", origin.url(), origin.pushurl());
            // let remote = &args.arg_remote;
            let mut remote = repo.find_remote("origin").expect("no remote 'origin'");
            // .or_else(|_| repo.remote_anonymous(remote))?;

            // Connect to the remote and call the printing function for each of the
            // remote references.
            let connection = remote
                .connect_auth(Direction::Fetch, None, None)
                .expect("couldn't connect to origin");

            // Get the list of references on the remote and print out their name next to
            // what they point to.
            for head in connection.list().unwrap().iter() {
                println!("{}\t{}", head.oid(), head.name());
            }
        }
    })
}
