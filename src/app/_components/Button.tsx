export const Button: React.FC<{ children: string, noFill?: boolean }> = ({ children, noFill }) => {
    const noFillStyle = "bg-transparent !text-black"

    return (
        <button className={`bg-black text-sm text-smoke px-8 py-4 flex items-center justify-center ${noFill ? noFillStyle : ""}`}>{children}</button>
    )
}