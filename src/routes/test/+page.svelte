<script lang="ts">
  import Tree from "$lib/Components/D&D Theme/Tree.svelte";

  type TreeNode = {
    name: string;
  } & (
    | { type: "folder"; children: string[] }
    | { type: "page"; pageID: string }
  );
  // old example:
  //   let exampleTree: TreeNode[] = [
  //     {id: "root", parent: null, order: 0, type: "folder", name: "Root"},
  //     {id: "folder1", parent: "root", order: 1, type: "folder", name: "Folder 1"},
  //     {id: "folder2", parent: "root", order: 2, type: "folder", name: "Folder 2"},
  //     {id: "folder3", parent: "folder1", order: 1, type: "folder", name: "Folder 3"},
  //     {id: "folder4", parent: "folder1", order: 2, type: "folder", name: "Folder 4"},
  //     {id: "folder5", parent: "folder2", order: 1, type: "folder", name: "Folder 5"},
  //     {id: "file1", parent: "folder1", order: 1, type: "file", name: "File 1"},
  //     {id: "file2", parent: "folder1", order: 2, type: "file", name: "File 2"},
  //     {id: "file3", parent: "folder2", order: 1, type: "file", name: "File 3"},
  //     {id: "file4", parent: "folder3", order: 1, type: "file", name: "File 4"},
  //     {id: "file5", parent: "folder4", order: 1, type: "file", name: "File 5"},
  //   ];

  let exampleTree: Record<string, TreeNode> = {
    root: { type:"folder", name: "Root", children: ["folder1", "folder2"] },
    folder1: { type:"folder", name: "Folder 1", children: ["folder3", "folder4"] },
    folder2: { type:"folder", name: "Folder 2", children: ["folder5"] },
    folder3: { type:"folder", name: "Folder 3", children: ["file1"] },
    folder4: { type:"folder", name: "Folder 4", children: ["file2"] },
    folder5: { type:"folder", name: "Folder 5", children: ["file3"] },
    file1: {type:"page", name: "File 1", pageID: "file1" },
    file2: {type:"page", name: "File 2", pageID: "file2" },
    file3: {type:"page", name: "File 3", pageID: "file3" },
    file4: {type:"page", name: "File 4", pageID: "file4" },
    file5: {type:"page", name: "File 5", pageID: "file5" },
  };
</script>

<Tree tree={exampleTree} />
