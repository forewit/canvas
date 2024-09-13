<script lang="ts">
  let { tree, newFolder = () => {}, newPage = () => {} }: props = $props();

  type props = {
    tree: Record<string, TreeNode>;
    newFolder?: () => void;
    newPage?: () => void;
  };

  type TreeNode = {
    name: string;
  } & (
    | { type: "folder"; children: string[] }
    | { type: "page"; pageID: string }
  );

  let expandedNodes: string[] = $state([]);
  let selectedNode: string = $state("root");

  function selectNode(id: string) {
    selectedNode = id;
    if (Object.hasOwn(tree[id], "children")) {
      if (expandedNodes.includes(id)) {
        expandedNodes = expandedNodes.filter((node) => node !== id);
      } else {
        expandedNodes.push(id);
      }
    }
  }
</script>

<div class="directory">
<button onclick={newFolder}>+📂</button>
<button onclick={newPage}>+📜</button>

{#snippet node(treeNode: TreeNode)}
{#if treeNode.type === "folder"}
  <ul>
    {#each treeNode.children as id}
      {#if tree[id].type === "page"}
        <li>
          <button
            class:selected={selectedNode === id}
            onclick={() => selectNode(id)}>📜 {tree[id].name}</button
          >
        </li>
      {:else if Object.hasOwn(tree[id], "children")}
        <li>
          {#if expandedNodes.includes(id)}
            <button
              class:selected={selectedNode === id}
              onclick={() => selectNode(id)}>📂 {tree[id].name}</button
            >
            {@render node(tree[id])}
          {:else}
            <button
              class:selected={selectedNode === id}
              onclick={() => selectNode(id)}>📁 {tree[id].name}</button
            >
          {/if}
        </li>
      {/if}
    {/each}
  </ul>
{/if}
{/snippet}

{@render node(tree["root"])}
</div>
<style>
  ul {
    margin-left: 1rem;
  }
  .selected {
    background-color: goldenrod;
  }
</style>
