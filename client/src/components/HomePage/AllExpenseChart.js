import React, { useState } from 'react';
import { PieChart, Pie, Sector, ResponsiveContainer } from 'recharts';
import { useSelector } from "react-redux"
const AllExpenseChart = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [data, setData] = useState([])

    const onPieEnter = (_, index) => {
        setActiveIndex(index);
    };
    const expesnse = useSelector((state) => {
        return state.expenses
    });
    const category = useSelector((state)=>{
        return state.category
    })

    React.useEffect(() => {
        if ((expesnse&&Object.keys(expesnse.expensesdata).length > 0)&&(category&&Object.keys(category.categoryData).length > 0)) {
            const result = []
            category.categoryData.forEach((cat)=>{
                let value = 0
                let name = cat.title
                expesnse.expensesdata.forEach((exp)=>{
                    if(!cat.isDelete && cat._id===exp.category){
                       value+=Number(exp.amount) 
                    }
                })
                result.push({name,value})
            })
            // console.log(result)
            setData(result)
        }
    }, [expesnse,category]) 

    const renderActiveShape = (props) => {
        const RADIAN = Math.PI / 180;
        const { cx, cy, midAngle, innerRadius, outerRadius, startAngle, endAngle, fill, payload, percent, value } = props;
        const sin = Math.sin(-RADIAN * midAngle);
        const cos = Math.cos(-RADIAN * midAngle);
        const sx = cx + (outerRadius + 10) * cos;
        const sy = cy + (outerRadius + 10) * sin;
        const mx = cx + (outerRadius + 30) * cos;
        const my = cy + (outerRadius + 30) * sin;
        const ex = mx + (cos >= 0 ? 1 : -1) * 22;
        const ey = my;
        const textAnchor = cos >= 0 ? 'start' : 'end';

        return (
            <g>
                <text x={cx} y={cy} dy={8} textAnchor="middle" fill={fill}>
                    {payload.name}
                </text>
                <Sector
                    cx={cx}
                    cy={cy}
                    innerRadius={innerRadius}
                    outerRadius={outerRadius}
                    startAngle={startAngle}
                    endAngle={endAngle}
                    fill={fill}
                />
                <Sector
                    cx={cx}
                    cy={cy}
                    startAngle={startAngle}
                    endAngle={endAngle}
                    innerRadius={outerRadius + 6}
                    outerRadius={outerRadius + 10}
                    fill={fill}
                />
                <path d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`} stroke={fill} fill="none" />
                <circle cx={ex} cy={ey} r={2} fill={fill} stroke="none" />
                <text x={ex + (cos >= 0 ? 1 : -1) * -28} y={ey-10} textAnchor={textAnchor} fill="#fff">{`${value}`}</text>
                {/* <text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} dy={18} textAnchor={textAnchor} fill="#999">
                    {`(Rate ${(percent * 100).toFixed(2)}%)`}
                </text> */}
            </g>
        );
    };

    



    return (
        <ResponsiveContainer width="100%" height="100%">
            <PieChart width={400} height={400}>
                <Pie
                    activeIndex={activeIndex}
                    activeShape={renderActiveShape}
                    data={data}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={80}
                    fill="#FECE2F"
                    dataKey="value"
                    onMouseEnter={onPieEnter}
                />
            </PieChart>
        </ResponsiveContainer>
    );
};

export default AllExpenseChart;