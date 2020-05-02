import React, { Component } from 'react'
import style from './index.less'
import { Form, Row, Button, Col, Input, message, Popconfirm } from 'antd'
import { CloseOutlined } from '@ant-design/icons';

const Tag = ({ content, onLeftClick = () => { }, onRightClick = () => { } }) => {
    return (
        <div className={style['tag-container']}>
            <div className={style['tag-left']}>
                <a onClick={onLeftClick}>{content}</a>
            </div>
            <div className={style['tag-right']}>
                <Popconfirm
                    title="Are you sure delete this tag?"
                    okText="Yes"
                    cancelText="No"
                    onConfirm={onRightClick}
                >
                    <CloseOutlined />
                </Popconfirm>
            </div>
        </div>
    )
}

class CategoryTag extends Component {
    constructor(props) {
        super(props);
        this.state = {
            categoryList: [],
            tagList: [{ name: 'aaa' }, { name: 'aaa' }, { name: 'aaa' }]
        }
    }
    formRef = React.createRef();
    saveCategory() {
        message.success('success');
    }
    onFinish = (values) => {
        console.log(values);
    }
    delCategory = (record) => [
        message.success('success')
    ]
    render() {
        const { categoryList, tagList } = this.state;
        return (
            <div className={style['content-container']}>
                <div className={style['header-container']}>
                    <div className={style['header-left']}>
                        <div className={style['pannel-container']}>
                            <div className={style['pannel-header']}>
                                <span>分类列表</span>
                            </div>
                            <div className={style['pannel-body']}>
                                {categoryList.map(item => (
                                    <Tag
                                        conten={item.name}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className={style['header-right']}>
                        <div className={style['pannel-container']}>
                            <div className={style['pannel-header']}>
                                <span>标签列表</span>
                            </div>
                            <div className={style['pannel-body']}>
                                {tagList.map(item => (
                                    <Tag
                                        content={item.name}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
                <div className={style['body-container']}>
                    <Form
                        ref={this.formRef}
                        name="form-ref"
                        onFinish={this.onFinish}
                    >
                        <Row gutter={10}>
                            <Col>
                                <Form.Item
                                    name="category"
                                >
                                    <Input placeholder='请输入分类名称' />
                                </Form.Item>
                            </Col>
                            <Col>
                                <Form.Item>
                                    <Button type="primary" htmlType="submit">保存分类</Button>
                                </Form.Item>
                            </Col>
                        </Row>
                    </Form>
                </div>
            </div>
        )
    }
}
export default CategoryTag