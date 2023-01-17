import { categories } from "../api";
import { Dropdown, Select } from 'antd';
import { useEffect } from "react";
import { useState } from "react";
const Sidebar = () => {
    const onChange = (value) => {
        console.log(`selected ${value}`);
        window.location.href = '/category/' + value;
    };
    const onSearch = (value) => {
        console.log('search:', value);
    };
    const category = categories;
    const [items, setItems] = useState([]);
    const fetchCategories = () => {
        let values = [];
        category.map((item) =>
            values.push({
                value: item.id,
                label: item.title
            })

        );
        if (values.length > 0) {
            setItems(values);
        }
    }
    useEffect(() => {
        fetchCategories();
    }, [])
    return (
        <div>
            <div className="row d-none d-md-block ">
                <div className="container colum ">
                    <div className="col-12">
                        <h3 className="intest">тесты</h3>
                        {category.map((item) =>
                            <div className="col-12 intest">
                                <a href={"/category/" + item.id} className="intest"><h6 className="intest">{item.title}</h6></a>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            <div className="col-12 d-block d-md-none testt">
                
                    <h5 className="text-white">Тесты</h5>
                    
                        <Select className="select"
                            showSearch
                            placeholder="Тесты"
                            optionFilterProp="children"
                            onChange={onChange}
                            onSearch={onSearch}
                            filterOption={(input, option) =>
                                (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
                            }
                            options={items}
                        />
                    
                
            </div>
        </div>
    )
}
export default Sidebar;



