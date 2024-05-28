import * as BUI from "@thatopen/ui";
import * as THREE from "three";
import * as OBC from "@thatopen/components";

const plansList = document.getElementById("plans-list") as BUI.Table;
const elevationsList = document.getElementById("elevations-list") as BUI.Table;
const sectionsList = document.getElementById("sections-list") as BUI.Table;
// const properties = document.getElementById("properties") as BUI.Table;

const container = document.getElementById("viewport") as BUI.Viewport;
const components = new OBC.Components();

const worlds = components.get(OBC.Worlds);

const world = worlds.create<
  OBC.SimpleScene,
  OBC.SimpleCamera,
  OBC.SimpleRenderer
>();

world.scene = new OBC.SimpleScene(components);
world.renderer = new OBC.SimpleRenderer(components, container);
world.camera = new OBC.SimpleCamera(components);

components.init();

world.scene.three.background = null;

const grids = components.get(OBC.Grids);
const grid = grids.create(world);
console.log(grid);

const material = new THREE.MeshLambertMaterial({ color: "#6528D7" });
const geometry = new THREE.BoxGeometry();
geometry.translate(0, 0.5, 0);
const cube = new THREE.Mesh(geometry, material);
world.scene.three.add(cube);

world.scene.setup();

world.camera.controls.setLookAt(3, 3, 3, 0, 0, 0);

BUI.Manager.init();

const controls = document.getElementById("controls") as HTMLElement;

const panel = BUI.Component.create<BUI.PanelSection>(() => {
  return BUI.html`
      <bim-panel label="Worlds Tutorial" class="options-menu">
        <bim-panel-section collapsed label="Controls">
        
          <bim-color-input 
            label="Background Color" color="#202932" 
            @input="${({ target }: { target: BUI.ColorInput }) => {
              world.scene.three.background = new THREE.Color(target.color);
            }}">
          </bim-color-input>
          
          <bim-number-input 
            slider step="0.1" label="Directional lights intensity" value="1.5" min="0.1" max="10"
            @change="${({ target }: { target: BUI.NumberInput }) => {
              for (const child of world.scene.three.children) {
                if (child instanceof THREE.DirectionalLight) {
                  child.intensity = target.value;
                }
              }
            }}">
          </bim-number-input>
          
          <bim-number-input 
            slider step="0.1" label="Ambient light intensity" value="1" min="0.1" max="5"
            @change="${({ target }: { target: BUI.NumberInput }) => {
              for (const child of world.scene.three.children) {
                if (child instanceof THREE.AmbientLight) {
                  child.intensity = target.value;
                }
              }
            }}">
          </bim-number-input>
          
        </bim-panel-section>
      </bim-panel>
      `;
});

controls.appendChild(panel);

plansList.data = [
  {
    data: {
      Name: "Floor Plans",
    },
    children: [
      {
        data: {
          Name: "Level 01",
        },
      },
      {
        data: {
          Name: "Level 02",
        },
      },
      {
        data: {
          Name: "Level 03",
        },
      },
    ],
  },
  {
    data: {
      Name: "Reflected Ceiling Plans",
    },
    children: [
      {
        data: {
          Name: "Level 01",
        },
      },
      {
        data: {
          Name: "Level 02",
        },
      },
      {
        data: {
          Name: "Level 03",
        },
      },
    ],
  },
];

elevationsList.data = [
  {
    data: {
      Name: "Elevations",
    },
    children: [
      {
        data: {
          Name: "North",
        },
      },
      {
        data: {
          Name: "South",
        },
      },
      {
        data: {
          Name: "West",
        },
      },
      {
        data: {
          Name: "East",
        },
      },
    ],
  },
];

sectionsList.data = [
  {
    data: {
      Name: "Sections",
    },
    children: [
      {
        data: {
          Name: "Section AA",
        },
      },
      {
        data: {
          Name: "Section BB",
        },
      },
    ],
  },
];
