import React from "react";
import { Card, StyledBody, StyledAction } from "baseui/card";
import {
  MonoDisplaySmall,
  ParagraphSmall,
} from "baseui/typography";

const manrope = {
  name: "Manrope",
  files: {
    regular: "https://fonts.googleapis.com/css2?family=Manrope",
  },
};

function Navbar() {
  const title = "Sonam";
  const textString =
    "Nunc nulla adipiscing volutpat tortor sed dui maecenas sed purus.";

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        height: "9.25vh",
        marginTop: "2vh",
      }}
    >
      <Card
        overrides={{
          Root: { style: { width: "50%", backgroundColor: "black" } },
        }}
        alignItems="center"
      >
        <StyledBody>
          <div
            className="left"
            style={{ display: "flex", flexDirection: "column" }}
          >
            <div className="left__upper">
              {/* <MonoLabelSmall>{textString}</MonoLabelSmall> */}
              <MonoDisplaySmall font="font400">{title}</MonoDisplaySmall>
            </div>
            <div className="left__lower">
              <ParagraphSmall>{textString}</ParagraphSmall>
            </div>
          </div>
          <div className="right">
            <img src="" alt="" />
          </div>
        </StyledBody>
      </Card>
    </div>
  );
}

export default Navbar;
