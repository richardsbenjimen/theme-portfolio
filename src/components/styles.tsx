import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { CSSProperties } from "react";

export const FlexBox = styled.div((props: CSSProperties) => {
    const { justifyContent, alignItems, width, height, gap, padding, margin, flexDirection, flex, position, backgroundColor, flexWrap, top, cursor } = props
    return ({
        display: "flex", justifyContent, alignItems, width, height, gap, padding, margin, flexDirection, flex, position, backgroundColor, flexWrap, top, cursor
    })
})


export const GridBox = styled.div(({ gridTemplateColumns, alignItems, height, margin, rowGap, alignContent, columnGap, position, minHeight, top, backgroundColor, padding }: CSSProperties) => {
    return ({
        display: "grid",
        minHeight,
        gridTemplateColumns,
        alignItems,
        height,
        margin,
        rowGap,
        alignContent,
        columnGap, position,
        top,
        backgroundColor,
        padding
    })
})

export const NavItems = styled(FlexBox)({
    gap: 10,
    ".mobile-icon": { display: "none" },
    p: {
        width: 100,
        height: 80,
        alignContent: 'center',
        cursor: "pointer",
        color: "var(--header-text-color)",
        "&:hover": {
            color: "var(--header-item-hover)"
        }
    },
    ".selected": {
        backgroundColor: "var(--selected-color)",
        color: "var(--header-selected-color)",
        "&:hover": {
            color: "var(--header-selected-color)",
        }
    },
    "@media all and (max-width:800px)":{
        p:{
            display: "none"
        },
        ".mobile-icon":{
            position: 'relative',
            display: 'block',
            border:"none",
            backgroundColor: "unset",
            svg:{
                fill: "var(--text-color)"
            }
        }
    }
})

export const ImageContainer = styled.div(({ minWidth, height, src }: CSSProperties & { src: string }) => {
    return ({
        minWidth,
        height,
        backgroundImage: `url(${src})`,
        backgroundSize: "cover",
        backgroundPosition: 'top'
    })
})


export const Maintitle = styled.h1(({ fontSize, textAlign, margin }: CSSProperties) => ({
    fontSize,
    textAlign,
    margin,
    strong: {
        color: `var(--strong)`
    },
    "@media all and (max-width:800px)":{
        height: 350
    }
}))

export const WorkCard = styled.div(({ cardNumber = 1 }: { cardNumber?: number }) => {
    return (css({
        display: 'flex',
        textAlign: 'start',
        height: 300,
        width: 300,
        flexDirection: 'column',
        p: {
            lineHeight: "170%"
        },
        h1: {
            margin: "0 0 8px 0",
            fontSize: 117,
            lineHeight: "100%",
            fontWeight: 400,
            color: "var(--work-number)"
        },
        h2: {
            margin: "0 0 16px 0",
            color: "var(--text-color)",
            fontSize: 24,
            lineHeight: "120%",
            fontWeight: "var(--font-weight-700)",
            strong: {
                color: `var(--work-color-${cardNumber})`,
                marginRight: 10
            }
        }
    }))
})


export const Logo = styled.p({
    margin: 0,
    cursor: 'pointer',
    height: 80,
    alignContent: 'center',
    width: 200,
    fontWeight: 600,
    fontSize: 20,
    color: "var(--logo-color)",
    strong: {
        color: "var(--selected-color)"
    }
})


export const ComponentTitle = styled.h1(({ fontSize = 50, width = "100%", textAlign = "start", margin = "0 0 24px 0", fontWeight }: CSSProperties) => ({
    fontSize, width, textAlign, margin, color: `var(--text-color)`, fontWeight
}))


export const ComponentDescription = styled.h2(({ fontSize = 18, width = "100%", textAlign = "start", margin = 0, lineHeight = "200%", letterSpacing = "0.5px" }: CSSProperties) => ({
    fontSize, width, textAlign, margin, color: `var(--description-color)`, lineHeight, letterSpacing
}))


export const SkillButton = styled.button(({ selected }: { selected?: boolean }) => ({
    border: `1px solid var(--selected-color)`,
    padding: "24px 32px",
    backgroundColor: selected ? "var(--selected-color)" : "transparent",
    color: selected ? "var(--header-selected-color)" : "var(--text-color)",
    fontSize: 18,
    fontWeight: "var(--font-weight-700)",
    cursor: "pointer",
    "&:hover": {
        backgroundColor: selected ? "" : "var(--card-hover-background)",
    }
}))


export const SkillCard = styled(FlexBox)({
    backgroundColor: 'rgb(39 39 44/1)',
    color: "var(--text-color)",
    width: 150,
    height: 140,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 18,
    flexDirection: 'column',
    gap: 10,
    padding: 10,
    background: " linear-gradient(var(--card-hover-background) 0 0) no-repeat calc(200% - var(--p, 0%))100% / 200% var(--p, 0.08em)",
    transition: "0.3s var(--t, 0s),background-position 0.3s calc(0.3s - var(--t, 0s))",
    "&:hover": {
        "--p": "100%",
        "--t": "0.3s",
        color: "var(--text-color)",
        cursor: 'pointer'
    }
})


export const ProjectCard = styled.div({
    display: "grid",
    minHeight: "300px",
    alignContent: "center",
    border: "1px solid #5b6876",
    padding: "32px",
    textAlign: 'start',
    h1: {
        marginBottom: 64,
        fontSize: 22,
        lineHeight: "120%",
        fontWeight: "var(--font-weight-700)",
    },
    h2: {
        margin: 0,
        fontSize: 18,
        lineHeight: "120%",
        fontWeight: "var(--font-weight-700)",
        "&:nth-child(1)": {
            color: "#8491a0"
        }
    }
})


export const FormInput = styled(FlexBox)({
    gap: 8,
    button: {
        width: '100%'
    },
    ".input-wrapper": {
        marginTop: '8px',
        marginBottom: 40,
        width: '100%',
        textAlign:'start',
        ".error":{
            marginTop: 8,
            color: "#df1f1f"
        }
    },
    "input,textarea": {
        border: "var(--form-input-border)",
        backgroundColor: "var(--form-input-bg)",
        color: "var(--text-color)",
        boxSizing: 'border-box',
        height: 45,
        width: '100%',
        padding: "8px 12px",
        fontSize: 14,
        "&:focus": {
            border: "var(--form-input-focus-border)"
        }
    },
    textarea: {
        height: 100,
        resize: "vertical"
    }
})



export const FooterWrapper = styled(GridBox)({
    padding: "80px 72px",
    backgroundColor: "var(--footer-bg)",
    gridTemplateColumns: "2fr 1fr"
})


export const ResumeButton = styled.button({
    border: "none",
    height: "50px",
    background: "var(--selected-color)",
    color: "#fff",
    borderRadius: "4px",
    fontWeight: "var(--font-weight-700)",
    fontSize: "14px",
    lineHeight: "20px",
    display: "flex",
    alignItems: "center",
    textAlign: "right",
    justifyContent: "center",
    textTransform: "capitalize",
    minHeight: "44px",
    width: "max-content",
    padding: "0 20px",
    cursor: "pointer"
})


export const HeaderWrapper = styled(FlexBox)(({ scrolled }: { scrolled?: boolean }) => ({
    top: 0,
    width: "100%",
    zIndex: 1,
    backgroundColor: "var(--background-color)",
    boxShadow: scrolled ? "0 .125rem .25rem rgba(0,0,0,.075)" : "",
    ".main-header":{
        padding: "0 72px"
    },
    "@media all and (max-width:800px)":{
        ".main-header": {
            padding: 0,
        }
    }
}))


export const FormWrapper = styled.form({
    display: 'grid',
    columnGap: 30,
    margin: "100px 0",
    gridTemplateColumns: "1fr 1fr",
})