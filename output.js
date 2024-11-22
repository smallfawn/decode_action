//Fri Nov 22 2024 12:34:46 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
import { world, system, EntityEquippableComponent, EquipmentSlot, Player, ItemUseAfterEvent, ItemUseBeforeEvent, EntityRidingComponent } from "@minecraft/server";
import { ActionFormData, ModalFormData } from "@minecraft/server-ui";
class PlayerAnimState {
  static #states = new Map();
  playerID;
  heldItem = "none";
  eatingFood = false;
  drinkingPotion = false;
  drawingBow = false;
  fishingRodState = false;
  spying = false;
  usedItemID = "";
  usedItemIndex = -1;
  constructor(T) {
    this.playerID = T;
  }
  itemStartUse(F) {
    switch (this.heldItem) {
      case "food":
        {
          this.eatingFood = true;
          break;
        }
      case "fishing_rod":
        {
          this.fishingRodState = !this.fishingRodState;
          break;
        }
      case "bow":
        {
          this.drawingBow = true;
          break;
        }
      case "potion":
        {
          this.drinkingPotion = true;
          break;
        }
      case "spyglass":
        {
          this.spying = true;
          break;
        }
    }
  }
  itemStopUse(F) {
    switch (this.heldItem) {
      case "food":
        {
          this.eatingFood = false;
          break;
        }
      case "potion":
        {
          this.drinkingPotion = false;
          break;
        }
      case "bow":
        {
          this.drawingBow = false;
          break;
        }
      case "spyglass":
        {
          this.spying = false;
          break;
        }
    }
  }
  tick(C) {
    const r = C.getComponent("minecraft:equippable"),
      e = r.getEquipment(EquipmentSlot.Mainhand);
    if (C.selectedSlotIndex !== this.usedItemIndex || e?.["typeId"] !== this.usedItemID) {
      this.usedItemIndex = C.selectedSlotIndex;
      this.usedItemID = e?.["typeId"];
      switch (true) {
        case !!e?.["hasTag"]("minecraft:is_food"):
          {
            this.heldItem = "food";
            break;
          }
        case e?.["typeId"] === "minecraft:potion" || e?.["typeId"] === "minecraft:water_bottle" || e?.["typeId"] === "minecraft:honey_bottle" || e?.["typeId"] === "minecraft:ominous_bottle":
          {
            this.heldItem = "potion";
            break;
          }
        case this.usedItemID?.["split"](":")["pop"]()["includes"]("sword"):
          {
            this.heldItem = "sword";
            break;
          }
        case this.usedItemID?.["split"](":")["pop"]()["includes"]("bow") && !this.usedItemID?.["split"](":")["pop"]()["includes"]("cross") && !this.usedItemID?.["split"](":")["pop"]()["includes"]("crossbow"):
          {
            this.heldItem = "bow";
            break;
          }
        case this.usedItemID === "minecraft:fishing_rod":
          {
            this.heldItem = "fishing_rod";
            break;
          }
        case this.usedItemID === "minecraft:spyglass":
          {
            this.heldItem = "spyglass";
            break;
          }
        default:
          {
            this.heldItem = "none";
            break;
          }
      }
      this.fishingRodState = false;
      this.drawingBow = false;
      this.eatingFood = false;
      this.drinkingPotion = false;
      this.spying = false;
    }
    if (this.fishingRodState) {
      const M = {
        controller: "controller.animation.melonbp_anims_plus.anims_plus.bnqmktcs",
        stopExpression: "0"
      };
      C.playAnimation("animation.melonbp_anims_plus.xzrhjepf.anims_plus.cpaupri.ziibeulu", M);
    } else {
      const I = {
        controller: "controller.animation.melonbp_anims_plus.anims_plus.bnqmktcs",
        stopExpression: "0"
      };
      C.playAnimation("animation.melonbp_anims_plus.xzrhjepf.anims_plus.cpaupri.sghxolb", I);
    }
    if (this.eatingFood) {
      const A = {
        controller: "controller.animation.melonbp_anims_plus.anims_plus.fcnjcvvxci",
        stopExpression: "0"
      };
      C.playAnimation("animation.melonbp_anims_plus.xzrhjepf.anims_plus.fcnjcvvxci.ziibeulu", A);
    } else {
      const d = {
        controller: "controller.animation.melonbp_anims_plus.anims_plus.fcnjcvvxci",
        stopExpression: "0"
      };
      C.playAnimation("animation.melonbp_anims_plus.xzrhjepf.anims_plus.fcnjcvvxci.sghxolb", d);
    }
    if (this.drinkingPotion) {
      C.playAnimation("animation.melonbp_anims_plus.xzrhjepf.anims_plus.ndcnysyo.ziibeulu", {
        controller: "controller.animation.melonbp_anims_plus.anims_plus.ndcnysyo",
        stopExpression: "0"
      });
    } else {
      const G = {
        controller: "controller.animation.melonbp_anims_plus.anims_plus.ndcnysyo",
        stopExpression: "0"
      };
      C.playAnimation("animation.melonbp_anims_plus.xzrhjepf.anims_plus.ndcnysyo.sghxolb", G);
    }
    if (this.drawingBow) {
      const K = {
        controller: "controller.animation.melonbp_anims_plus.anims_plus.wcescwlft",
        stopExpression: "0"
      };
      C.playAnimation("animation.melonbp_anims_plus.xzrhjepf.anims_plus.wcescwlft.ziibeulu", K);
    } else {
      const U = {
        controller: "controller.animation.melonbp_anims_plus.anims_plus.wcescwlft",
        stopExpression: "0"
      };
      C.playAnimation("animation.melonbp_anims_plus.xzrhjepf.anims_plus.wcescwlft.sghxolb", U);
    }
    if (this.spying) {
      const b = {
        controller: "controller.animation.melonbp_anims_plus.anims_plus.vgkvayfy",
        stopExpression: "0"
      };
      C.playAnimation("animation.melonbp_anims_plus.xzrhjepf.anims_plus.vgkvayfy.ziibeulu", b);
    } else {
      const n = {
        controller: "controller.animation.melonbp_anims_plus.anims_plus.vgkvayfy",
        stopExpression: "0"
      };
      C.playAnimation("animation.melonbp_anims_plus.xzrhjepf.anims_plus.vgkvayfy.sghxolb", n);
    }
    if (this.heldItem === "sword") {
      const V = {
        controller: "controller.animation.melonbp_anims_plus.anims_plus.iytveky",
        stopExpression: "0"
      };
      C.playAnimation("animation.melonbp_anims_plus.xzrhjepf.anims_plus.dbubhbsv.ziibeulu", V);
    } else {
      const m = {
        controller: "controller.animation.melonbp_anims_plus.anims_plus.iytveky",
        stopExpression: "0"
      };
      C.playAnimation("animation.melonbp_anims_plus.xzrhjepf.anims_plus.dbubhbsv.sghxolb", m);
    }
    if (C.isFlying) {
      C.playAnimation("animation.melonbp_anims_plus.xzrhjepf.anims_plus.kjlleyuqe.ziibeulu", {
        controller: "controller.animation.melonbp_anims_plus.anims_plus.fpqbgqzx",
        stopExpression: "0"
      });
    } else {
      const B = {
        controller: "controller.animation.melonbp_anims_plus.anims_plus.fpqbgqzx",
        stopExpression: "0"
      };
      C.playAnimation("animation.melonbp_anims_plus.xzrhjepf.anims_plus.kjlleyuqe.sghxolb", B);
    }
    if (C.isClimbing) {
      const x = {
        controller: "controller.animation.melonbp_anims_plus.anims_plus.pvjqkuaawj",
        stopExpression: "0"
      };
      C.playAnimation("animation.melonbp_anims_plus.xzrhjepf.anims_plus.pvjqkuaawj", x);
    } else {
      const s = {
        controller: "controller.animation.melonbp_anims_plus.anims_plus.pvjqkuaawj",
        stopExpression: "0"
      };
      C.playAnimation("animation.melonbp_anims_plus.xzrhjepf.anims_plus.knfnhyuno", s);
    }
    const q = C.getComponent("minecraft:riding");
    switch (q?.["entityRidingOn"]?.["typeId"]) {
      case "minecraft:boat":
        {
          const R = {
            controller: "controller.animation.melonbp_anims_plus.anims_plus.lwosgeab",
            stopExpression: "0"
          };
          C.playAnimation("animation.melonbp_anims_plus.xzrhjepf.anims_plus.lwosgeab.plozoycs", R);
          break;
        }
      case "minecraft:minecart":
        {
          C.playAnimation("animation.melonbp_anims_plus.xzrhjepf.anims_plus.lwosgeab.zoqasymj", {
            controller: "controller.animation.melonbp_anims_plus.anims_plus.lwosgeab",
            stopExpression: "0"
          });
          break;
        }
      default:
        {
          if (q?.["entityRidingOn"]) {
            const f = {
              controller: "controller.animation.melonbp_anims_plus.anims_plus.lwosgeab",
              stopExpression: "0"
            };
            C.playAnimation("animation.melonbp_anims_plus.xzrhjepf.anims_plus.lwosgeab.wgccfknvd", f);
          } else {
            const c = {
              controller: "controller.animation.melonbp_anims_plus.anims_plus.lwosgeab",
              stopExpression: "0"
            };
            C.playAnimation("animation.melonbp_anims_plus.xzrhjepf.anims_plus.lwosgeab.uldjalf", c);
          }
          break;
        }
    }
    if (!C.isGliding) {
      const o = {
        controller: "controller.animation.melonbp_anims_plus.anims_plus.ngmrtzdb",
        stopExpression: "q.is_gliding"
      };
      C.playAnimation("animation.melonbp_anims_plus.xzrhjepf.anims_plus", o);
    }
  }
  static getState(T) {
    !PlayerAnimState.#states.has(T) && PlayerAnimState.#states.set(T, new PlayerAnimState(T));
    return PlayerAnimState.#states.get(T);
  }
  static removeState(T) {
    PlayerAnimState.#states.delete(T);
  }
}
world.afterEvents.playerLeave.subscribe(T => {
  PlayerAnimState.removeState(T.id);
});
world.afterEvents.itemStartUse.subscribe(F => {
  const t = F.source;
  t.getDynamicProperty("pcwaleyf") === false && PlayerAnimState.getState(t.id).itemStartUse(F);
});
world.afterEvents.itemStopUse.subscribe(F => {
  const t = F.source;
  t.getDynamicProperty("pcwaleyf") === false && PlayerAnimState.getState(t.id).itemStopUse(F);
});
world.afterEvents.entityHurt.subscribe(y => {
  if (y.hurtEntity.typeId !== "minecraft:player") {
    return;
  }
  const J = {
    controller: "controller.animation.melonbp_anims_plus.anims_plus.vatdpwfi",
    stopExpression: "0"
  };
  y.hurtEntity.playAnimation("animation.melonbp_anims_plus.xzrhjepf.anims_plus.vatdpwfi.ziibeulu", J);
  system.runTimeout(() => {
    y.hurtEntity.playAnimation("animation.melonbp_anims_plus.xzrhjepf.anims_plus.vatdpwfi.sghxolb", {
      controller: "controller.animation.melonbp_anims_plus.anims_plus.vatdpwfi",
      stopExpression: "0"
    });
  }, 3);
});
const animationsExecutedMap = {};
system.runInterval(() => {
  world.getPlayers().forEach(g => {
    console.log("Checking player ID: " + g.id);
    if (g.getDynamicProperty("pcwaleyf") === false) {
      PlayerAnimState.getState(g.id).tick(g);
      animationsExecutedMap[g.id] = false;
    } else {
      if (!animationsExecutedMap[g.id]) {
        PlayerAnimState.removeState(g.id);
        const t = {
          controller: "controller.animation.melonbp_anims_plus.anims_plus.ngmrtzdb",
          stopExpression: "0.01"
        };
        g.playAnimation("animation.melonbp_anims_plus.xzrhjepf.biwfwnoo.zadiscqk", t);
        animationsExecutedMap[g.id] = true;
      }
    }
  });
});
world.afterEvents.itemUse.subscribe(T => {
  const {
    source: F,
    itemStack: y
  } = T;
  switch (y.typeId) {
    case "melonbp_anims_plus:qhpqihdek":
      qhpqihdek(F);
  }
});
const qhpqihdek_form = new ActionFormData(),
  j = {
    translate: "anims_plus.oiygsqylm"
  };
const W = {
  rawtext: [j]
};
qhpqihdek_form.title(W);
const E = {
  translate: "anims_plus.fhpabfcd.oiygsqylm"
};
const Q0 = {
  text: "\n"
};
const Q1 = {
  translate: "anims_plus.fhpabfcd.mrdsggqjv"
};
const Q2 = {
  text: "\n\n"
};
const Q3 = {
  translate: "anims_plus.fhpabfcd.fsuwvqji"
};
const Q4 = {
  text: "\n\n"
};
const Q5 = {
  translate: "anims_plus.fhpabfcd.pfaaypojhp"
};
const Q6 = {
  text: "\n\n"
};
const Q7 = {
  translate: "anims_plus.fhpabfcd.akrsrgikg"
};
const Q8 = {
  text: "\n"
};
const Q9 = {
  translate: "anims_plus.fhpabfcd.pjsyiczudg"
};
const QQ = {
  text: "\n\n"
};
const Qz = {
  translate: "anims_plus.fhpabfcd.cdvkpjhpw"
};
const QT = {
  text: "\n"
};
const QF = {
  translate: "anims_plus.fhpabfcd.febarqrqjn"
};
const Qy = {
  text: "\n\n"
};
const Qg = {
  translate: "anims_plus.fhpabfcd.sirprlh"
};
const Qt = {
  text: "\n"
};
const QJ = {
  translate: "anims_plus.fhpabfcd.sirprlh.oqnrbmfyi"
};
const QH = {
  text: "\n"
};
const QN = {
  translate: "anims_plus.fhpabfcd.sirprlh.lowumkiskj"
};
const Qv = {
  text: "\n\n"
};
const Qk = {
  translate: "anims_plus.fhpabfcd.visuhsro"
};
const Qu = {
  text: "\n\n"
};
const Qh = {
  translate: "anims_plus.fhpabfcd.drdefdduld"
};
const QO = {
  text: "\n\n"
};
const Qp = {
  rawtext: [E, Q0, Q1, Q2, Q3, Q4, Q5, Q6, Q7, Q8, Q9, QQ, Qz, QT, QF, Qy, Qg, Qt, QJ, QH, QN, Qv, Qk, Qu, Qh, QO]
};
qhpqihdek_form.body(Qp);
const QS = {
  translate: "anims_plus.nshnljbkxm.zuptxxab"
};
const QY = {
  rawtext: [QS]
};
qhpqihdek_form.button(QY, "textures/melonbp/anims_plus/dfvvupihwy/zuptxxab");
const Qi = {
  translate: "anims_plus.nshnljbkxm.vlmqanxeox"
};
const Ql = {
  rawtext: [Qi]
};
qhpqihdek_form.button(Ql, "textures/melonbp/anims_plus/dfvvupihwy/ffyrrjlqwi");
const QD = {
  translate: "anims_plus.nshnljbkxm.bajudkvhhf"
};
const QC = {
  rawtext: [QD]
};
qhpqihdek_form.button(QC, "textures/melonbp/anims_plus/dfvvupihwy/bajudkvhhf");
const QL = {
  translate: "anims_plus.nshnljbkxm.sebqeohgc"
};
const QZ = {
  rawtext: [QL]
};
qhpqihdek_form.button(QZ, "textures/melonbp/anims_plus/dfvvupihwy/sebqeohgc");
const Qr = {
  translate: "anims_plus.nshnljbkxm.qeldhao"
};
const Qe = {
  rawtext: [Qr]
};
qhpqihdek_form.button(Qe, "textures/melonbp/anims_plus/dfvvupihwy/qeldhao");
const Qq = {
  translate: "anims_plus.nshnljbkxm.srofimo"
};
const QM = {
  rawtext: [Qq]
};
qhpqihdek_form.button(QM, "textures/melonbp/anims_plus/dfvvupihwy/srofimo");
const QI = {
  translate: "anims_plus.nshnljbkxm.dklgugphni"
};
const QA = {
  rawtext: [QI]
};
qhpqihdek_form.button(QA, "textures/melonbp/anims_plus/dfvvupihwy/dklgugphni");
const Qd = {
  translate: "anims_plus.nshnljbkxm.zkpgeedb"
};
const QG = {
  rawtext: [Qd]
};
qhpqihdek_form.button(QG, "textures/melonbp/anims_plus/dfvvupihwy/zkpgeedb");
const QK = {
  translate: "anims_plus.nshnljbkxm.eroepfe"
};
const QU = {
  rawtext: [QK]
};
qhpqihdek_form.button(QU, "textures/melonbp/anims_plus/dfvvupihwy/eroepfe");
const Qb = {
  translate: "anims_plus.nshnljbkxm.hjkswdywjj"
};
const Qn = {
  rawtext: [Qb]
};
qhpqihdek_form.button(Qn, "textures/melonbp/anims_plus/dfvvupihwy/hjkswdywjj");
const QV = {
  translate: "anims_plus.nshnljbkxm.tochbkyp"
};
const Qm = {
  rawtext: [QV]
};
qhpqihdek_form.button(Qm, "textures/melonbp/anims_plus/dfvvupihwy/tochbkyp");
const QB = {
  translate: "anims_plus.nshnljbkxm.lpttvwau"
};
const QP = {
  rawtext: [QB]
};
qhpqihdek_form.button(QP, "textures/melonbp/anims_plus/dfvvupihwy/lpttvwau");
const Qx = {
  translate: "anims_plus.nshnljbkxm.bnqmktcs"
};
const Qs = {
  rawtext: [Qx]
};
qhpqihdek_form.button(Qs, "textures/melonbp/anims_plus/dfvvupihwy/uskylhn");
const QR = {
  translate: "anims_plus.nshnljbkxm.vtjkewjb"
};
const Qf = {
  rawtext: [QR]
};
qhpqihdek_form.button(Qf, "textures/melonbp/anims_plus/dfvvupihwy/vtjkewjb");
const Qc = {
  translate: "anims_plus.nshnljbkxm.hiwyvysn"
};
const Qo = {
  rawtext: [Qc]
};
qhpqihdek_form.button(Qo, "textures/melonbp/anims_plus/dfvvupihwy/hiwyvysn");
const Qa = {
  translate: "anims_plus.nshnljbkxm.zoqasymj"
};
const Qw = {
  rawtext: [Qa]
};
qhpqihdek_form.button(Qw, "textures/melonbp/anims_plus/dfvvupihwy/zoqasymj");
const QX = {
  translate: "anims_plus.nshnljbkxm.plozoycs"
};
const Qj = {
  rawtext: [QX]
};
qhpqihdek_form.button(Qj, "textures/melonbp/anims_plus/dfvvupihwy/plozoycs");
const QW = {
  translate: "anims_plus.nshnljbkxm.knqvtdv"
};
const QE = {
  rawtext: [QW]
};
qhpqihdek_form.button(QE, "textures/melonbp/anims_plus/dfvvupihwy/knqvtdv");
const z0 = {
  translate: "anims_plus.nshnljbkxm.vatdpwfi"
};
const z1 = {
  rawtext: [z0]
};
qhpqihdek_form.button(z1, "textures/melonbp/anims_plus/dfvvupihwy/vatdpwfi");
const z2 = {
  translate: "anims_plus.nshnljbkxm.nerdkndjph"
};
const z3 = {
  rawtext: [z2]
};
qhpqihdek_form.button(z3, "textures/melonbp/anims_plus/dfvvupihwy/nerdkndjph");
const z4 = {
  translate: "anims_plus.nshnljbkxm.siwtnpq"
};
const z5 = {
  rawtext: [z4]
};
qhpqihdek_form.button(z5, "textures/melonbp/anims_plus/dfvvupihwy/siwtnpq");
const z6 = {
  translate: "anims_plus.nshnljbkxm.kohbpvj"
};
const z7 = {
  rawtext: [z6]
};
qhpqihdek_form.button(z7, "textures/melonbp/anims_plus/dfvvupihwy/kohbpvj");
const z8 = {
  translate: "anims_plus.nshnljbkxm.xpiauzqh"
};
const z9 = {
  rawtext: [z8]
};
qhpqihdek_form.button(z9);
function qhpqihdek(T) {
  qhpqihdek_form.show(T).then(y => {
    let g = y.selection;
    switch (g) {
      case 0:
        if (T.getDynamicProperty("melonbp:gvnvaznfh") === true) {
          toggle_page(T);
        } else {
          const J = {
            translate: "anims_plus.rpljgzmq.zrvqxhxngh"
          };
          const H = {
            rawtext: [J]
          };
          T.sendMessage(H);
        }
        break;
      case 1:
        avatar_support_page(T);
        break;
      case 2:
        idle_page(T);
        break;
      case 3:
        walk_page(T);
        break;
      case 4:
        run_page(T);
        break;
      case 5:
        sneak_page(T);
        break;
      case 6:
        jump_page(T);
        break;
      case 7:
        crawl_page(T);
        break;
      case 8:
        swim_page(T);
        break;
      case 9:
        climb_page(T);
        break;
      case 10:
        fall_page(T);
        break;
      case 11:
        bow_page(T);
        break;
      case 12:
        fishing_rod_page(T);
        break;
      case 13:
        eat_page(T);
        break;
      case 14:
        drink_page(T);
        break;
      case 15:
        minecart_page(T);
        break;
      case 16:
        melee_page(T);
        break;
      case 17:
        sit_page(T);
        break;
      case 18:
        hurt_page(T);
        break;
      case 19:
        crossbow_page(T);
        break;
      case 20:
        map_page(T);
        break;
      case 21:
        fly_page(T);
        break;
      case 22:
        break;
    }
  });
}
function idle_page(F) {
  idle_page_form.show(F).then(t => {
    let J = t.selection;
    J == 0 && qhpqihdek(F);
  });
}
function walk_page(F) {
  walk_page_form.show(F).then(t => {
    let J = t.selection;
    J == 0 && qhpqihdek(F);
  });
}
function run_page(F) {
  run_page_form.show(F).then(t => {
    let J = t.selection;
    J == 0 && qhpqihdek(F);
  });
}
function sneak_page(T) {
  sneak_page_form.show(T).then(y => {
    let g = y.selection;
    g == 0 && qhpqihdek(T);
  });
}
function avatar_support_page(T) {
  avatar_support_page_form.show(T).then(y => {
    let g = y.selection;
    g == 0 && qhpqihdek(T);
  });
}
function jump_page(F) {
  jump_page_form.show(F).then(t => {
    let J = t.selection;
    J == 0 && qhpqihdek(F);
  });
}
function crawl_page(T) {
  crawl_page_form.show(T).then(y => {
    let g = y.selection;
    if (g == 0) {
      qhpqihdek(T);
    }
  });
}
function swim_page(T) {
  swim_page_form.show(T).then(y => {
    let g = y.selection;
    g == 0 && qhpqihdek(T);
  });
}
function climb_page(T) {
  climb_page_form.show(T).then(F => {
    let y = F.selection;
    y == 0 && qhpqihdek(T);
  });
}
function fall_page(T) {
  fall_page_form.show(T).then(F => {
    let y = F.selection;
    y == 0 && qhpqihdek(T);
  });
}
function bow_page(T) {
  bow_page_form.show(T).then(y => {
    let g = y.selection;
    g == 0 && qhpqihdek(T);
  });
}
function fishing_rod_page(T) {
  fishing_rod_page_form.show(T).then(F => {
    let y = F.selection;
    y == 0 && qhpqihdek(T);
  });
}
function eat_page(T) {
  eat_page_form.show(T).then(F => {
    let y = F.selection;
    y == 0 && qhpqihdek(T);
  });
}
function drink_page(F) {
  drink_page_form.show(F).then(t => {
    let J = t.selection;
    J == 0 && qhpqihdek(F);
  });
}
function minecart_page(T) {
  minecart_page_form.show(T).then(y => {
    let g = y.selection;
    g == 0 && qhpqihdek(T);
  });
}
function melee_page(T) {
  melee_page_form.show(T).then(F => {
    let y = F.selection;
    y == 0 && qhpqihdek(T);
  });
}
function sit_page(T) {
  sit_page_form.show(T).then(y => {
    let g = y.selection;
    g == 0 && qhpqihdek(T);
  });
}
function hurt_page(T) {
  hurt_page_form.show(T).then(y => {
    let g = y.selection;
    g == 0 && qhpqihdek(T);
  });
}
function crossbow_page(T) {
  crossbow_page_form.show(T).then(y => {
    let g = y.selection;
    g == 0 && qhpqihdek(T);
  });
}
function map_page(T) {
  map_page_form.show(T).then(y => {
    let g = y.selection;
    g == 0 && qhpqihdek(T);
  });
}
function fly_page(T) {
  fly_page_form.show(T).then(y => {
    let g = y.selection;
    g == 0 && qhpqihdek(T);
  });
}
const zQ = {
  translate: "anims_plus.yiuqoasfn.oiygsqylm"
};
const zz = {
  rawtext: [zQ]
};
const zT = {
  translate: "anims_plus.yiuqoasfn.jnbkmmgoyp"
};
const zF = {
  rawtext: [zT]
};
const zy = {
  translate: "anims_plus.iujsjnc"
};
const zg = {
  rawtext: [zy]
};
const idle_page_form = new ActionFormData().title(zz).body(zF).button(zg, "textures/melonbp/anims_plus/dfvvupihwy/bajudkvhhf"),
  zt = {
    translate: "anims_plus.quayxsh.oiygsqylm"
  };
const zJ = {
  rawtext: [zt]
};
const zH = {
  translate: "anims_plus.quayxsh.jnbkmmgoyp"
};
const zN = {
  rawtext: [zH]
};
const zv = {
  translate: "anims_plus.iujsjnc"
};
const zk = {
  rawtext: [zv]
};
const walk_page_form = new ActionFormData().title(zJ).body(zN).button(zk, "textures/melonbp/anims_plus/dfvvupihwy/sebqeohgc"),
  zu = {
    translate: "anims_plus.ybiymyj.oiygsqylm"
  };
const zh = {
  rawtext: [zu]
};
const zO = {
  translate: "anims_plus.ybiymyj.jnbkmmgoyp"
};
const zp = {
  rawtext: [zO]
};
const zS = {
  translate: "anims_plus.iujsjnc"
};
const zY = {
  rawtext: [zS]
};
const run_page_form = new ActionFormData().title(zh).body(zp).button(zY, "textures/melonbp/anims_plus/dfvvupihwy/qeldhao"),
  zi = {
    translate: "anims_plus.arwtiufui.oiygsqylm"
  };
const zl = {
  rawtext: [zi]
};
const zD = {
  translate: "anims_plus.arwtiufui.jnbkmmgoyp"
};
const zC = {
  rawtext: [zD]
};
const zL = {
  translate: "anims_plus.iujsjnc"
};
const zZ = {
  rawtext: [zL]
};
const sneak_page_form = new ActionFormData().title(zl).body(zC).button(zZ, "textures/melonbp/anims_plus/dfvvupihwy/srofimo"),
  zr = {
    translate: "anims_plus.hnddneyaci.oiygsqylm"
  };
const ze = {
  rawtext: [zr]
};
const zq = {
  translate: "anims_plus.hnddneyaci.jnbkmmgoyp"
};
const zM = {
  rawtext: [zq]
};
const zI = {
  translate: "anims_plus.iujsjnc"
};
const zA = {
  rawtext: [zI]
};
const avatar_support_page_form = new ActionFormData().title(ze).body(zM).button(zA, "textures/melonbp/anims_plus/dfvvupihwy/ffyrrjlqwi"),
  zd = {
    translate: "anims_plus.nwmitbkg.oiygsqylm"
  };
const zG = {
  rawtext: [zd]
};
const zK = {
  translate: "anims_plus.nwmitbkg.jnbkmmgoyp"
};
const zU = {
  rawtext: [zK]
};
const zb = {
  translate: "anims_plus.iujsjnc"
};
const zn = {
  rawtext: [zb]
};
const jump_page_form = new ActionFormData().title(zG).body(zU).button(zn, "textures/melonbp/anims_plus/dfvvupihwy/dklgugphni"),
  zV = {
    translate: "anims_plus.zsmycgxubw.oiygsqylm"
  };
const zm = {
  rawtext: [zV]
};
const zB = {
  translate: "anims_plus.zsmycgxubw.jnbkmmgoyp"
};
const zP = {
  rawtext: [zB]
};
const zx = {
  translate: "anims_plus.iujsjnc"
};
const zs = {
  rawtext: [zx]
};
const crawl_page_form = new ActionFormData().title(zm).body(zP).button(zs, "textures/melonbp/anims_plus/dfvvupihwy/zkpgeedb"),
  zR = {
    translate: "anims_plus.jqvjsdhhzo.oiygsqylm"
  };
const zf = {
  rawtext: [zR]
};
const zc = {
  translate: "anims_plus.jqvjsdhhzo.jnbkmmgoyp"
};
const zo = {
  rawtext: [zc]
};
const za = {
  translate: "anims_plus.iujsjnc"
};
const zw = {
  rawtext: [za]
};
const swim_page_form = new ActionFormData().title(zf).body(zo).button(zw, "textures/melonbp/anims_plus/dfvvupihwy/eroepfe"),
  zX = {
    translate: "anims_plus.vemavkmewx.oiygsqylm"
  };
const zj = {
  rawtext: [zX]
};
const zW = {
  translate: "anims_plus.vemavkmewx.jnbkmmgoyp"
};
const zE = {
  rawtext: [zW]
};
const T0 = {
  translate: "anims_plus.iujsjnc"
};
const T1 = {
  rawtext: [T0]
};
const climb_page_form = new ActionFormData().title(zj).body(zE).button(T1, "textures/melonbp/anims_plus/dfvvupihwy/hjkswdywjj"),
  T2 = {
    translate: "anims_plus.crbjnmq.oiygsqylm"
  };
const T3 = {
  rawtext: [T2]
};
const T4 = {
  translate: "anims_plus.crbjnmq.jnbkmmgoyp"
};
const T5 = {
  rawtext: [T4]
};
const T6 = {
  translate: "anims_plus.iujsjnc"
};
const T7 = {
  rawtext: [T6]
};
const fall_page_form = new ActionFormData().title(T3).body(T5).button(T7, "textures/melonbp/anims_plus/dfvvupihwy/tochbkyp"),
  T8 = {
    translate: "anims_plus.wbnaogdor.oiygsqylm"
  };
const T9 = {
  rawtext: [T8]
};
const TQ = {
  translate: "anims_plus.wbnaogdor.jnbkmmgoyp"
};
const Tz = {
  rawtext: [TQ]
};
const TT = {
  translate: "anims_plus.iujsjnc"
};
const TF = {
  rawtext: [TT]
};
const bow_page_form = new ActionFormData().title(T9).body(Tz).button(TF, "textures/melonbp/anims_plus/dfvvupihwy/lpttvwau"),
  Ty = {
    translate: "anims_plus.bfaoypwbbf.oiygsqylm"
  };
const Tg = {
  rawtext: [Ty]
};
const Tt = {
  translate: "anims_plus.bfaoypwbbf.jnbkmmgoyp"
};
const TJ = {
  rawtext: [Tt]
};
const TH = {
  translate: "anims_plus.iujsjnc"
};
const TN = {
  rawtext: [TH]
};
const fishing_rod_page_form = new ActionFormData().title(Tg).body(TJ).button(TN, "textures/melonbp/anims_plus/dfvvupihwy/uskylhn"),
  Tv = {
    translate: "anims_plus.criaigxbd.oiygsqylm"
  };
const Tk = {
  rawtext: [Tv]
};
const Tu = {
  translate: "anims_plus.criaigxbd.jnbkmmgoyp"
};
const Th = {
  rawtext: [Tu]
};
const TO = {
  translate: "anims_plus.iujsjnc"
};
const Tp = {
  rawtext: [TO]
};
const eat_page_form = new ActionFormData().title(Tk).body(Th).button(Tp, "textures/melonbp/anims_plus/dfvvupihwy/vtjkewjb"),
  TS = {
    translate: "anims_plus.ryzpttwhpf.oiygsqylm"
  };
const TY = {
  rawtext: [TS]
};
const Ti = {
  translate: "anims_plus.ryzpttwhpf.jnbkmmgoyp"
};
const Tl = {
  rawtext: [Ti]
};
const TD = {
  translate: "anims_plus.iujsjnc"
};
const TC = {
  rawtext: [TD]
};
const drink_page_form = new ActionFormData().title(TY).body(Tl).button(TC, "textures/melonbp/anims_plus/dfvvupihwy/hiwyvysn"),
  TL = {
    translate: "anims_plus.linutjzj.oiygsqylm"
  };
const TZ = {
  rawtext: [TL]
};
const Tr = {
  translate: "anims_plus.linutjzj.jnbkmmgoyp"
};
const Te = {
  rawtext: [Tr]
};
const Tq = {
  translate: "anims_plus.iujsjnc"
};
const TM = {
  rawtext: [Tq]
};
const minecart_page_form = new ActionFormData().title(TZ).body(Te).button(TM, "textures/melonbp/anims_plus/dfvvupihwy/zoqasymj"),
  TI = {
    translate: "anims_plus.plozoycs.oiygsqylm"
  };
const TA = {
  rawtext: [TI]
};
const Td = {
  translate: "anims_plus.plozoycs.jnbkmmgoyp"
};
const TG = {
  rawtext: [Td]
};
const TK = {
  translate: "anims_plus.iujsjnc"
};
const TU = {
  rawtext: [TK]
};
const melee_page_form = new ActionFormData().title(TA).body(TG).button(TU, "textures/melonbp/anims_plus/dfvvupihwy/plozoycs"),
  Tb = {
    translate: "anims_plus.vutobofktp.oiygsqylm"
  };
const Tn = {
  rawtext: [Tb]
};
const TV = {
  translate: "anims_plus.vutobofktp.jnbkmmgoyp"
};
const Tm = {
  rawtext: [TV]
};
const TB = {
  translate: "anims_plus.iujsjnc"
};
const TP = {
  rawtext: [TB]
};
const sit_page_form = new ActionFormData().title(Tn).body(Tm).button(TP, "textures/melonbp/anims_plus/dfvvupihwy/knqvtdv"),
  Tx = {
    translate: "anims_plus.hrvafkdf.oiygsqylm"
  };
const Ts = {
  rawtext: [Tx]
};
const TR = {
  translate: "anims_plus.hrvafkdf.jnbkmmgoyp"
};
const Tf = {
  rawtext: [TR]
};
const Tc = {
  translate: "anims_plus.iujsjnc"
};
const To = {
  rawtext: [Tc]
};
const hurt_page_form = new ActionFormData().title(Ts).body(Tf).button(To, "textures/melonbp/anims_plus/dfvvupihwy/vatdpwfi"),
  Ta = {
    translate: "anims_plus.ztmbxuzp.oiygsqylm"
  };
const Tw = {
  rawtext: [Ta]
};
const TX = {
  translate: "anims_plus.ztmbxuzp.jnbkmmgoyp"
};
const Tj = {
  rawtext: [TX]
};
const TW = {
  translate: "anims_plus.iujsjnc"
};
const TE = {
  rawtext: [TW]
};
const crossbow_page_form = new ActionFormData().title(Tw).body(Tj).button(TE, "textures/melonbp/anims_plus/dfvvupihwy/nerdkndjph"),
  F0 = {
    translate: "anims_plus.xpwgiicopr.oiygsqylm"
  };
const F1 = {
  rawtext: [F0]
};
const F2 = {
  translate: "anims_plus.xpwgiicopr.jnbkmmgoyp"
};
const F3 = {
  rawtext: [F2]
};
const F4 = {
  translate: "anims_plus.iujsjnc"
};
const F5 = {
  rawtext: [F4]
};
const map_page_form = new ActionFormData().title(F1).body(F3).button(F5, "textures/melonbp/anims_plus/dfvvupihwy/siwtnpq"),
  F6 = {
    translate: "anims_plus.zwvhptkg.oiygsqylm"
  };
const F7 = {
  rawtext: [F6]
};
const F8 = {
  translate: "anims_plus.zwvhptkg.jnbkmmgoyp"
};
const F9 = {
  rawtext: [F8]
};
const FQ = {
  translate: "anims_plus.iujsjnc"
};
const Fz = {
  rawtext: [FQ]
};
const fly_page_form = new ActionFormData().title(F7).body(F9).button(Fz, "textures/melonbp/anims_plus/dfvvupihwy/kohbpvj"),
  FT = {
    translate: "anims_plus.rpljgzmq.jnbkmmgoyp"
  };
const FF = {
  rawtext: [FT]
};
const Fy = {
  translate: "anims_plus.rpljgzmq.raslgunlbc"
};
const Fg = {
  rawtext: [Fy]
};
const Ft = {
  translate: "anims_plus.rpljgzmq.mvlwvuu"
};
const FJ = {
  rawtext: [Ft]
};
const FH = {
  translate: "anims_plus.rpljgzmq.hwmbopwjrk"
};
const FN = {
  rawtext: [FH]
};
const Fv = {
  translate: "anims_plus.rpljgzmq.eskwmrqwh"
};
const Fk = {
  rawtext: [Fv]
};
const Fu = {
  translate: "anims_plus.rpljgzmq.qlwnchvur"
};
const Fh = {
  rawtext: [Fu]
};
const toggle_page_form = new ModalFormData().toggle(FF, false).toggle(Fg, false).textField(FJ, FN).textField(Fk, Fh);
function toggle_page(T) {
  toggle_page_form.show(T).then(i => {
    try {
      const l = i.formValues[0],
        D = i.formValues[1],
        C = i.formValues[2].split(", "),
        L = i.formValues[3].split(", ");
      let Z = "";
      for (const r of world.getAllPlayers()) {
        l == 1 && D == 0 && (removePlayerFromNoAnimations(r), Z = "anims_plus.rpljgzmq.kwjwznm");
        l == 0 && D == 1 && (addPlayerToNoAnimations(r), Z = "anims_plus.rpljgzmq.dqghxascsi");
        l == 1 && D == 1 && (Z = "anims_plus.rpljgzmq.sqndkys");
      }
      if (Z) {
        const M = {
          translate: Z
        };
        const I = {
          rawtext: [M]
        };
        T.sendMessage(I);
      }
      for (const A of C) {
        if (A) {
          const d = world.getPlayers().find(G => G.name === A);
          if (d) {
            if (d.getDynamicProperty("pcwaleyf") === true) {
              removePlayerFromNoAnimations(d);
              const G = {
                translate: "anims_plus.rpljgzmq.ikkmyunnw"
              };
              const K = {
                text: A
              };
              const U = {
                rawtext: [G, K]
              };
              T.sendMessage(U);
            }
          } else {
            const b = {
              translate: "anims_plus.rpljgzmq.nevajdji"
            };
            const n = {
              text: A
            };
            const V = {
              translate: "anims_plus.rpljgzmq.inxqeqn"
            };
            const m = {
              rawtext: [b, n, V]
            };
            T.sendMessage(m);
          }
        }
      }
      for (const B of L) {
        if (B) {
          const P = world.getPlayers().find(x => x.name === B);
          if (P) {
            if (P.getDynamicProperty("pcwaleyf") === false) {
              addPlayerToNoAnimations(P);
              const x = {
                translate: "anims_plus.rpljgzmq.fjvakgxmnv"
              };
              const s = {
                text: B
              };
              const R = {
                rawtext: [x, s]
              };
              T.sendMessage(R);
            }
          } else {
            const f = {
              translate: "anims_plus.rpljgzmq.nevajdji"
            };
            const c = {
              text: B
            };
            const o = {
              translate: "anims_plus.rpljgzmq.inxqeqn"
            };
            const a = {
              rawtext: [f, c, o]
            };
            T.sendMessage(a);
          }
        }
      }
    } catch {}
  });
}
function addPlayerToNoAnimations(F) {
  F.setDynamicProperty("pcwaleyf", false);
}
function removePlayerFromNoAnimations(F) {
  F.setDynamicProperty("pcwaleyf", true);
}
world.afterEvents.worldInitialize.subscribe(() => {
  if (!world.getDynamicProperty("melonbp:fvahgckidb")) {
    const g = world.getAllPlayers()[0];
    g && g.isValid() && (world.setDynamicProperty("melonbp:fvahgckidb", true), g.setDynamicProperty("melonbp:gvnvaznfh", true));
  }
});
world.afterEvents.playerSpawn.subscribe(({
  player: T
}) => {
  !world.getDynamicProperty("melonbp:fvahgckidb") && (world.setDynamicProperty("melonbp:fvahgckidb", true), T.setDynamicProperty("melonbp:gvnvaznfh", true));
  if (!T.getDynamicProperty("melonbp:hcrppqqq")) {
    T.runCommand("loot spawn ~ ~ ~ loot \"melonbp/anims_plus/qnbbwtyxb\"");
    T.setDynamicProperty("melonbp:hcrppqqq", true);
    T.setDynamicProperty("pcwaleyf", false);
  }
});