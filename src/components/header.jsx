export default function Header({title}) {
    return (
        console.log(title),
        <header className="bg-foreground text-background">
            <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                <h1 className="text-3xl font-bold leading-tight">{title}</h1>        
            </div>
        </header>
    )
}
