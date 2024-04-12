

export default function CompareScreen() {
    return (
        <div>
            <h3>Your Comparison Summary</h3>
            <p>good</p>
            <p>bad</p>
            <h4>Both...</h4>
            <ul>
                <li>are hydrating and brightening</li>
                <li>do not contain harsh alcohols or fragrances</li>
                <li>contain glycerin, and pentylene glycol</li>
            </ul>
            <h4>Differences</h4>
            <div>
                <h6>My Routine</h6>
                {/* img */}
                <h5>Your Toner...</h5>
                <ul>
                    <li>contains butylene glycol, sodium hyaluronate, and hyaluronic acid</li>
                    <li>is exzema-safe</li>
                </ul>
            </div>
            <div>
                <h6>Currently Viewing</h6>
                {/* img */}
                <h5>This New Toner...</h5>
                <ul>
                    <li>contains ascorbic acid, lactic acid and citric acid</li>
                    <li>is paraben-free and silicone-free</li>
                </ul>
            </div>
            {/* <ActionButtons /> */}
        </div>
    )
}