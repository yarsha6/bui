import * as BUI from "@thatopen/ui"

BUI.Manager.registerComponents()

const viewsList = document.getElementById("views-list") as BUI.Table

viewsList.data = [
  {
    data: {
      Name: "Structural Plans"
    },
    children: [
      {
        data: {
          Name: "Level 01"
        }
      },
      {
        data: {
          Name: "Level 02"
        }
      },
      {
        data: {
          Name: "Level 03"
        }
      },
    ]
  },
  {
    data: {
      Name: "Floor Plans"
    },
    children: [
      {
        data: {
          Name: "Level 01"
        }
      }
    ]
  },
  {
    data: {
      Name: "Ceiling Plans"
    },
    children: [
      {
        data: {
          Name: "Level 01"
        }
      }
    ]
  },
  {
    data: {
      Name: "3D Views"
    },
    children: [
      {
        data: {
          Name: "Presentation View"
        }
      }
    ]
  },
  {
    data: {
      Name: "Elevations"
    },
    children: [
      {
        data: {
          Name: "North"
        }
      },
      {
        data: {
          Name: "South"
        }
      },
      {
        data: {
          Name: "East"
        }
      },
      {
        data: {
          Name: "West"
        }
      }
    ]
  },
  {
    data: {
      Name: "Sections"
    },
    children: [
      {
        data: {
          Name: "Section 01"
        }
      }
    ]
  },
  {
    data: {
      Name: "Detail Views"
    },
    children: [
      {
        data: {
          Name: "Flashing"
        }
      }
    ]
  },
  {
    data: {
      Name: "Renderings"
    },
    children: [
      {
        data: {
          Name: "Exterior Main Entrance"
        }
      }
    ]
  }
]

